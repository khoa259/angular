import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { NameComponent } from './name/name.component';
import { IdentityComponent } from './identity/identity.component';
import { TableNameComponent } from './table/table-name/table-name.component';
import { TableAvatarComponent } from './table/table-avatar/table-avatar.component';

import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    NameComponent,
    IdentityComponent,
    TableNameComponent,
    TableAvatarComponent,
    FormComponent,
    UserFormComponent,
    UserListComponent,
    UserComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
