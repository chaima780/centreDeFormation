import { Component, OnInit } from '@angular/core';
import { FormationServicesService } from '../../Services/formation-services.service';
import { Formation } from '../../Models/formation.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formations: any[];
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
      console.log(this.formations);
    });
  }

  moreDetails(id){
    this._router.navigate(['/detils',id]);
  }
}
