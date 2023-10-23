import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { GroupsCComponent } from './components/groups-c/groups-c.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ParentComponent } from './components/parent/parent.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [



  {
    path: '',
    component: GroupsCComponent,
    children: [
      { path: '', redirectTo: '/Main', pathMatch: 'full' },
      { path: 'Main', component: MainComponent, title: 'Main Page' },
      {path: 'Products',component: ProductsComponent,title: 'Products Page'},
      { path: 'AboutUs', component: AboutusComponent, title: 'About us page' },
      { path: 'Contact', component: ContactusComponent, title: 'Contact'},
      { path: 'Parent', component: ParentComponent, title: 'Parent'},
      {path:'ProductDetails/:prodID',component: ProductDetailsComponent, title: 'Product Details'},
      { path:'Posts',component: PostsComponent, title: 'Posts'},
    ],
  },

  { path: '**', component: NotfoundComponent, title: 'Not Found Page' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
