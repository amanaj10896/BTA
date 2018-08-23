import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {MatTableModule,MatSortModule} from '@angular/material';
//import {UserService } from './user.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//import { Ng2OrderModule } from 'ng2-order-pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    //MatTableModule,
   // MatSortModule,
    BrowserModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
   // Ng2OrderModule,
    GooglePlaceModule,
    RouterModule.forRoot([
      {
  path: 'dashboard',
  component:DashboardComponent

      },
      {
        path: '',
        component:LoginComponent
      
            }

    ])
    
  ],
providers: [/*UserService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
