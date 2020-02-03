import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  {
    path: 'users', component: UsersListComponent, children: [
      { path: 'add', component: AddUserFormComponent },
      { path: ':id', component: UserInfoComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
