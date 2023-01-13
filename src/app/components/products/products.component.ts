import {DialogBoxComponent} from './../UI/dialog-box/dialog-box.component'
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
  }

  public openDialog(): void {
    let dialogConfig = new MatDialogConfig()
    dialogConfig.width = '700px'
    dialogConfig.disableClose = true

    const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig)

    dialogRef.afterClosed().subscribe((data) => this.addProduct(data))
  }

  public addProduct(product: IProduct): void {
    this.productService
      .addProduct(product)
      .subscribe((product: IProduct) => this.products.push(product))
  }

  public deleteProduct(id: number): void {
    console.log(id)
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

  public ngOnDestroy(): void {
    if (this.productsSub) this.productsSub.unsubscribe()
  }
}
