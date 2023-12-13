import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PersonLsService} from "../person-ls.service";
import {Person} from "../person";

@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.css']
})
export class DetailsComponentComponent {
  personId?: number;
  person?: Person;
  constructor(private route: ActivatedRoute, private personLsService: PersonLsService) {

  }

 ngOnInit() {
   this.route.params.subscribe(params => {
     this.personId = params['id'];
     this.person = (this.personId ? this.personLsService.getPerson(this.personId) : undefined);
   });
 }
}
