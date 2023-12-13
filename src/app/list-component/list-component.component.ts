import { Component } from '@angular/core';
import {Person} from "../person";
import {PersonLsService} from "../person-ls.service";

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent {
  people: Person[] = [];

  constructor(private personLsService: PersonLsService) {

  }

  ngOnInit() {
    this.people = this.personLsService.getAll();
  }

  delete(index: number) {
    if(confirm("Are you sure?")){
      this.personLsService.deletePerson(index);
      this.people = this.personLsService.getAll();
    }
  }
}
