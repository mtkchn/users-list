import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { UserInfoComponent } from './user-info/user-info.component';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestGitComponent } from './test-git/test-git.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserInfoComponent,
    AddUserFormComponent,
    TestGitComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [HttpClientModule, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
