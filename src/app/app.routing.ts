import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/navbar.component";
import {PostsComponent} from "./posts/posts.component";
import {UsersComponent} from "./users/users.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {NewUserComponent} from "./users/new-user/users.component";

export const routing = RouterModule.forRoot([
  {path: '', component: HomeComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/new', component: NewUserComponent},
  {path: '**', component: NotFoundComponent},
]);
