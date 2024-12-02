import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { ProductlistComponent } from './container/productlist/productlist.component';
import { ProductComponent } from './container/productlist/product/product.component';
import { FilterComponent } from './container/productlist/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { ProductdetailComponent } from './container/productdetail/productdetail.component';
import { FeaturedbarndsComponent } from './container/featuredbarnds/featuredbarnds.component';
import { ZoomDirective } from './custom-directives/zoom.directive';
import { HoverDirective } from './custom-directives/hover.directive';
import { DisabledProductDirective } from './custom-directives/disabled-product.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    NavigationComponent,
    TopheaderComponent,
    ContainerComponent,
    SearchComponent,
    ProductlistComponent,
    ProductComponent,
    FilterComponent,
    ProductdetailComponent,
    FeaturedbarndsComponent,
    ZoomDirective,
    HoverDirective,
    DisabledProductDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
