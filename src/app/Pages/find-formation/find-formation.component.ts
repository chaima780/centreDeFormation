import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormationServicesService } from 'src/app/Services/formation-services.service';

@Component({
  selector: 'app-find-formation',
  templateUrl: './find-formation.component.html',
  styleUrls: ['./find-formation.component.css'],
  animations: [

    // Trigger animation cards array
    trigger('cardAnimation', [
      // Transition from any state to any state
      transition('* => *', [
        // Initially the all cards are not visible
        query(':enter', style({ opacity: 0 }), { optional: true }),

        // Each card will appear sequentially with the delay of 300ms
        query(':enter', stagger('300ms', [
          animate('.5s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-50%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(-10px) scale(1.1)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))]), { optional: true }),

        // Cards will disappear sequentially with the delay of 300ms
        query(':leave', stagger('300ms', [
          animate('500ms ease-out', keyframes([
            style({ opacity: 1, transform: 'scale(1.1)', offset: 0 }),
            style({ opacity: .5, transform: 'scale(.5)', offset: 0.3 }),
            style({ opacity: 0, transform: 'scale(0)', offset: 1 }),
          ]))]), { optional: true })
      ]),
    ]),

    // Trigger animation for plus button
    trigger('plusAnimation', [

      // Transition from any state to any state
      transition('* => *', [
        query('.plus-card', style({ opacity: 0, transform: 'translateY(-40px)' })),
        query('.plus-card', stagger('500ms', [
          animate('300ms 1.1s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ])),
      ])
    ])
  ]
})
export class FindFormationComponent implements OnInit {
  index = 3;
  formations = [];
  displayedFormations = [];
  constructor(private _router: Router,private _formationService: FormationServicesService) { }

  ngOnInit(): void {
    this._formationService.getFormation().subscribe(data => {
      this.formations = data.map(e => {
        const data = e.payload.doc.data();
        const id = e.payload.doc.id;
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        }
      });
      this.displayedFormations = this.formations;
    });
  }

  addCard() {
    this.index++
    this.formations.push({titre: 'New'});
  }

  deleteCard(i) {
    this.formations.splice(i, 1);
  }
  filterFormations(inputData : String){
    if(inputData.length > 1)
      this.displayedFormations = this.formations.filter(x => x.tags.indexOf(inputData) != -1); 
    if(inputData == '')
      this.displayedFormations = this.formations;
  }
  viewDetails(id){
    this._router.navigate(['/detils',id]);
  }
}
