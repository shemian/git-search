import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { DatePipePipe } from './date-pipe.pipe';
import { UserComponent } from './user/user.component';
import { UserServiceService } from './user-service.service';
import { SearchUserComponent } from './search-user/search-user.component';
import { RepoComponent } from './repo/repo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    DatePipePipe,
    UserComponent,
    SearchUserComponent,
    RepoComponent,
    NavbarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    

  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
