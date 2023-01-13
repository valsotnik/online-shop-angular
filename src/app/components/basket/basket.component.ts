import {ProductsService} from './../../services/products.service'
import {Subscription} from 'rxjs'
import {IProduct} from 'src/app/models/products'
import {Component, OnDestroy, OnInit} from '@angular/core'

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit, OnDestroy {
  public basketProducts: IProduct[]
  public basketSubscription: Subscription

  constructor(private productService: ProductsService) {}

  public ngOnInit(): void {
    this.basketSubscription = this.productService
      .getProductsFromBasket()
      .subscribe((data) => {
        this.basketProducts = data
      })
  }

  public increaseQuantity(product: IProduct): void {
    product.quantity++
    this.productService.updateProductFromBasket(product).subscribe()
  }

  public decreaseQuantity(product: IProduct): void {
    if (product.quantity === 1) {
      this.productService
        .deleteProductFromBasket(product.id)
        .subscribe((data) => {
          let index = this.basketProducts.findIndex(
            (data) => data.id === product.id
          )
          this.basketProducts.splice(index, 1)
        })
    } else {
      product.quantity--
      this.productService.updateProductFromBasket(product).subscribe()
    }
  }

  public ngOnDestroy(): void {
    if (this.basketSubscription) this.basketSubscription.unsubscribe()
  }
}
