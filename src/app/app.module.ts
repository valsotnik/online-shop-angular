import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {ProductsComponent} from './components/products/products.component'
import {BasketComponent} from './components/basket/basket.component'
import {ProductDetailsComponent} from './components/product-details/product-details.component'
import {BaseComponent} from './components/base/base.component'
import {HeaderComponent} from './components/UI/header/header.component'
import {FooterComponent} from './components/UI/footer/footer.component'
import {DialogBoxComponent} from './components/UI/dialog-box/dialog-box.component'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    BasketComponent,
    ProductDetailsComponent,
    BaseComponent,
    HeaderComponent,
    FooterComponent,
    DialogBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
