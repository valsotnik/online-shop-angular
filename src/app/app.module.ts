import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {ProductsComponent} from './components/products/products.component'
import {BasketComponent} from './components/basket/basket.component'
import {ProductDetailsComponent} from './components/product-details/product-details.component'
import {BaseComponent} from './components/base/base.component'
import {UiModule} from './components/UI/ui/ui.module'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    BasketComponent,
    ProductDetailsComponent,
    BaseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, UiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
