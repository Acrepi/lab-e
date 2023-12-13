import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponentComponent} from "./list-component/list-component.component";
import {NotFoundComponentComponent} from "./not-found-component/not-found-component.component";
import {AddPersonComponentComponent} from "./add-person-component/add-person-component.component";
import {DetailsComponentComponent} from "./details-component/details-component.component";

const routes: Routes = [
  {path: "list", component: ListComponentComponent},
  {path: "details/:id", component: DetailsComponentComponent},
  {path: "add", component: AddPersonComponentComponent},
  {path: "", redirectTo: "/list", pathMatch: "full"},
  {path: "**", component: NotFoundComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
