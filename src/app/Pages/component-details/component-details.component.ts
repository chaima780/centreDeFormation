import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from 'src/app/Models/formation.model';
import { FormationServicesService } from 'src/app/Services/formation-services.service';

@Component({
  selector: 'app-component-details',
  templateUrl: './component-details.component.html',
  styleUrls: ['./component-details.component.css']
})
export class ComponentDetailsComponent implements OnInit {
  formation: any;
  tags: any;
  constructor(private _activatedroute: ActivatedRoute,private _formationService: FormationServicesService) { }

  ngOnInit(): void {
    this._activatedroute.params.subscribe(data => {
      this._formationService.getFormationbyId(data.formation).subscribe(formation=>{
        if(formation.exists){
          this.formation = formation.data();
          this.tags = this.formation.tags;
        }else{
          console.log("No such document!");
        }
      });
    })
  }

}
