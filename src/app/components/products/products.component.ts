import {DialogBoxComponent} from '../../shared/components/dialog-box/dialog-box.component'
import {ProductsService} from './../../services/products.service'
import {IProduct} from './../../models/products'
import {Component, OnDestroy, OnInit} from '@angular/core'
import {Observable, Subject, Subscription} from 'rxjs'
import {MatDialog, MatDialogConfig} from '@angular/material/dialog'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  public products: IProduct[]
  public productsSub: Subscription
  public basketProducts: IProduct[]
  public basketSub: Subscription
  public editMode: boolean = false

  constructor(
    public dialog: MatDialog,
    private productService: ProductsService
  ) {}

  public ngOnInit(): void {
    this.editMode = true
    this.productsSub = this.productService
      .getProducts()
      .subscribe((products: IProduct[]) => (this.products = products))

    this.basketSub = this.productService
      .getProductsFromBasket()
      .subscribe((products: IProduct[]) => (this.basketProducts = products))
  }

  public openDialog(product?: IProduct): void {
    let dialogConfig = new MatDialogConfig()
    dialogConfig.width = '700px'
    dialogConfig.disableClose = true
    dialogConfig.data = product

    const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig)

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        data && data.id ? this.updateProduct(data) : this.addProduct(data)
      }
    })
  }

  public addProduct(product: IProduct): void {
    this.productService
      .addProduct(product)
      .subscribe((product: IProduct) => this.products.push(product))
  }

  public updateProduct(product: IProduct): void {
    this.productService.updateProduct(product).subscribe((data) => {
      this.products = this.products.map((product: IProduct) => {
        return product.id === data.id ? data : product
      })
    })
  }

  public deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(
      // rewrite in simple method
      () =>
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
      .subscribe((data) => this.basketProducts.push(data))
  }

  public updateInBasket(product: IProduct): void {
    product.quantity++
    this.productService.updateProductFromBasket(product).subscribe((data) => {})
  }

  public ngOnDestroy(): void {
    if (this.productsSub) this.productsSub.unsubscribe()
    if (this.basketSub) this.basketSub.unsubscribe()
  }
}
