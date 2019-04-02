

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import {HttpClientModule} from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import {RoutingModule} from './routing/routing.module';
import { RouterModule } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import {FormsModule} from '@angular/forms';
import {SearchRequestService} from './search-request.service';
import { DateCountPipe } from './date-count.pipe';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    RepositoriesComponent,
    SearchFormComponent,
    DateCountPipe,
    HighlightDirective
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    RouterModule,
    FormsModule,
    NgProgressModule,
    NgProgressHttpModule,
    HttpClientModule
  ],
  providers: [SearchRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }

