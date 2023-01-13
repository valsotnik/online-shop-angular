import {DialogDetailsComponent} from './../../shared/components/dialog-details/dialog-details.component'
import {DialogBoxComponent} from '../../shared/components/dialog-box/dialog-box.component'
import {ProductsService} from './../../services/products.service'
import {IProduct} from './../../models/products'
import {Component, OnInit, Self} from '@angular/core'
import {Subscription} from 'rxjs'
import {takeUntil} from 'rxjs/operators'
import {MatDialog, MatDialogConfig} from '@angular/material/dialog'
import {OnDestroyService} from 'src/app/services/on-destroy.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [OnDestroyService],
})
export class ProductsComponent implements OnInit {
  public products: IProduct[]
  public basketProducts: IProduct[]
  public detailsProduct: IProduct

  constructor(
    @Self() private readonly destroy$: OnDestroyService,
    public dialog: MatDialog,
    private productService: ProductsService
  ) {}

  public ngOnInit(): void {
    this.productService
      .getProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe((products: IProduct[]) => (this.products = products))

    this.productService
      .getProductsFromBasket()
      .pipe(takeUntil(this.destroy$))
      .subscribe((products: IProduct[]) => (this.basketProducts = products))
  }

  public openAddDialog(): void {
    let dialogConfig = new MatDialogConfig()
    dialogConfig.width = '700px'
    dialogConfig.disableClose = true

    const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig)

    dialogRef.afterClosed().subscribe((data) => this.addProduct(data))
  }

  public openEditDialog(product?: IProduct): void {
    this.productService
      .getProduct(product?.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((product: IProduct) => {
        let dialogConfig = new MatDialogConfig()
        dialogConfig.width = '700px'
        dialogConfig.disableClose = true
        dialogConfig.data = product

        const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig)

        dialogRef
          .afterClosed()
          .pipe(takeUntil(this.destroy$))
          .subscribe((data) => this.updateProduct(data))
      })
  }

  public openDetailsDialog(product: IProduct): void {
    this.productService
      .getProduct(product.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((product: IProduct) => {
        let dialogConfig = new MatDialogConfig()
        dialogConfig.width = '500px'
        dialogConfig.height = '800px'
        dialogConfig.disableClose = true
        dialogConfig.data = product
        const dialogRef = this.dialog.open(DialogDetailsComponent, dialogConfig)
      })
  }

  public addProduct(product: IProduct): void {
    this.productService
      .addProduct(product)
      .pipe(takeUntil(this.destroy$))
      .subscribe((product: IProduct) => this.products.push(product))
  }

  public updateProduct(product: IProduct): void {
    this.productService
      .updateProduct(product)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.products = this.products.map((product: IProduct) => {
          return product.id === data.id ? data : product
        })
      })
  }

  public deleteProduct(id: number): void {
    this.productService
      .deleteProduct(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() =>
        this.products.find((product) => {
          if (id === product.id) {
            let index = this.products.findIndex((data) => data.id === id)
            this.products.splice(index, 1)
          }
        })
      )
  }

  public increaseQuantity(product: IProduct) {
    product.quantity = 1
    let item

    if (this.basketProducts.length) {
      item = this.basketProducts.find((item) => item.id === product.id)
      item ? this.updateInBasket(item) : this.addToBasket(product)
    } else this.addToBasket(product)
  }

  public addToBasket(product: IProduct): void {
    this.productService
      .addProductToBasket(product)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => this.basketProducts.push(data))
  }

  public updateInBasket(product: IProduct): void {
    product.quantity++
    this.productService
      .updateProductFromBasket(product)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {})
  }
}
