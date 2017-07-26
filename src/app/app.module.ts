import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {HomeComponent} from "./home/navbar.component";
import {PostsComponent} from "./posts/posts.component";
import {UsersComponent} from "./users/users.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {routing} from "./app.routing";
import {HttpModule, JsonpModule} from "@angular/http";
import {NewUserComponent} from "./users/new-user/new-user.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PreventUnsavedChanges} from "app/protection/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PostsComponent,
    UsersComponent,
    NotFoundComponent,
    NewUserComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    BrowserModule,
    routing
  ],
  providers: [
    PreventUnsavedChanges
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
