import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'
import {HttpClientModule} from '@angular/common/http'
import {MatDialogModule} from '@angular/material/dialog'
import {MatMenuModule} from '@angular/material/menu'

import {AppRoutingModule} from './app-routing.module'
import {SharedModule} from './shared/shared.module'
import {AppComponent} from './app.component'
import {ProductsComponent} from './components/products/products.component'
import {BasketComponent} from './components/basket/basket.component'
import {ProductDetailsComponent} from './components/product-details/product-details.component'
import {BaseComponent} from './components/base/base.component'

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    ProductsComponent,
    ProductDetailsComponent,
    BasketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
