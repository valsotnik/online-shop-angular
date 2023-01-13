import {ProductsService} from './../../services/products.service'
import {takeUntil} from 'rxjs/operators'
import {IProduct} from 'src/app/models/products'
import {Component, OnInit, Self} from '@angular/core'
import {OnDestroyService} from 'src/app/services/on-destroy.service'

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  providers: [OnDestroyService],
})
export class BasketComponent implements OnInit {
  public basketProducts: IProduct[]

  constructor(
    @Self() private readonly destroy$: OnDestroyService,
    private productService: ProductsService
  ) {}

  public ngOnInit(): void {
    this.productService
      .getProductsFromBasket()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.basketProducts = data
      })
  }

  public increaseQuantity(product: IProduct): void {
    product.quantity++
    this.productService
      .updateProductFromBasket(product)
      .pipe(takeUntil(this.destroy$))
      .subscribe()
  }

  public decreaseQuantity(product: IProduct): void {
    if (product.quantity === 1) {
      this.productService
        .deleteProductFromBasket(product.id)
        .pipe(takeUntil(this.destroy$))
        .subscribe((data) => {
          let index = this.basketProducts.findIndex(
            (data) => data.id === product.id
          )
          this.basketProducts.splice(index, 1)
        })
    } else {
      product.quantity--
      this.productService
        .updateProductFromBasket(product)
        .pipe(takeUntil(this.destroy$))
        .subscribe()
    }
  }
}
