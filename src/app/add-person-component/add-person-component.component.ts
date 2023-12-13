import { Component } from '@angular/core';
import {Person} from "../person";
import {PersonLsService} from "../person-ls.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-person-component',
  templateUrl: './add-person-component.component.html',
  styleUrls: ['./add-person-component.component.css']
})
export class AddPersonComponentComponent {
  person: Person = {
    address: {}
  };

  constructor(private personLsService: PersonLsService, private router: Router) {

  }

  save() {
    this.personLsService.addPerson(this.person);
    this.router.navigateByUrl('/list');
  }
}
