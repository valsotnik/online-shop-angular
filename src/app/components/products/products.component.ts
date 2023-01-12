import {ProductsService} from './../../services/products.service'
import {IProduct} from './../../models/products'
import {Component, OnInit} from '@angular/core'
import {Observable, Subscription} from 'rxjs'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products$: Observable<IProduct[]>
  public subscription: Subscription

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts()
  }
}
