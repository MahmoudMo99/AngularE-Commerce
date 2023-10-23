import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { DiDirective } from './directives/di.directive';
import { Pipe1Pipe } from './pipes/pipe-1.pipe';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { GroupsCComponent } from './components/groups-c/groups-c.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ParentComponent } from './components/parent/parent.component';
import { PostsComponent } from './components/posts/posts.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//material angular
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ProductsComponent,
    FooterComponent,
    DiDirective,
    Pipe1Pipe,
    MainComponent,
    AboutusComponent,
    ContactusComponent,
    NotfoundComponent,
    GroupsCComponent,
    ProductDetailsComponent,
    ParentComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //material
    MatSlideToggleModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})

//material angular
export class AppModule { }
