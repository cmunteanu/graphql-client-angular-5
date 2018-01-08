import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersListComponent} from './users-list/users-list.component';
import {UserDetailsComponent} from './user-details/user-details.component';

const routes: Routes = [
        {
            path: '/users-list',
            component: UsersListComponent,
        },
        {
            path: '/user-details',
            component: UserDetailsComponent,
        },
    ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
