import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToursListComponent } from './tours-list/tours-list.component';
import { TourComponent } from './tours-list/tour/tour.component';
import { UserComponent } from './user/user.component';
import { CartComponent } from './user/cart/cart.component';
import { UserToursComponent } from './user/user-tours/user-tours.component';
import { UserDataComponent } from './user/user-data/user-data.component';
import { StartPageComponent } from './user/start-page/start-page.component';

import { GetToursService } from './services/get-tours.service';
import { GetUsersService } from './services/get-users.service';
import { AuthService } from './services/auth.service';
import { ChangeUsersService } from './services/change-users.service';
import { AuthGuard } from './guards/auth-guard.service';
import { CartItemComponent } from './user/cart/cart-item/cart-item.component';
import { TourItemComponent } from './user/user-tours/tour-item/tour-item.component';
import { ModalTourComponent } from './tours-list/tour/modal-tour/modal-tour.component';
import { ModalService } from './services/modal.service';
import { ModalCartComponent } from './user/cart/cart-item/modal-cart/modal-cart.component';
import { SortToursPipe } from './pipes/sort-tours.pipe';


const userRoutes = [
  { path: "", component: StartPageComponent},
  { path: "my-data", component: UserDataComponent},
  { path: "my-cart", component: CartComponent},
  { path: "my-tours", component: UserToursComponent}
];

const routes = [
  {path: '', component: HomeComponent},
  {path: 'home', redirectTo: '/', pathMatch: 'full'},
  {path: 'tours', component: ToursListComponent},
  {path: 'user', component: UserComponent, children: userRoutes, canActivate: [AuthGuard]},
  {path: "**", redirectTo: '/'}
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToursListComponent,
    TourComponent,
    UserComponent,
    CartComponent,
    UserToursComponent,
    UserDataComponent,
    StartPageComponent,
    CartItemComponent,
    TourItemComponent,
    ModalTourComponent,
    ModalCartComponent,
    SortToursPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {useHash:true})
  ],
  providers: [
    GetToursService, 
    GetUsersService, 
    AuthService,
    ChangeUsersService,
    AuthGuard,
    ModalService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
