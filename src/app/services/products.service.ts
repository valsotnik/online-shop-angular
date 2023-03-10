import {environment} from './../../environments/environment'
import {IProduct} from './../models/products'
import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  public getProducts() {
    return this.http.get<IProduct[]>(environment.urlData)
  }

  public getProduct(id: number) {
    return this.http.get<IProduct>(`${environment.urlData}/${id}`)
  }

  public addProduct(product: IProduct) {
    return this.http.post<IProduct>(environment.urlData, product)
  }

  public updateProduct(product: IProduct) {
    return this.http.patch<IProduct>(
      `${environment.urlData}/${product.id}`,
      product
    )
  }

  public deleteProduct(id: number) {
    return this.http.delete(`${environment.urlData}/${id}`)
  }

  public addProductToBasket(product: IProduct) {
    return this.http.post<IProduct>(environment.urlBasket, product)
  }

  public getProductsFromBasket() {
    return this.http.get<IProduct[]>(environment.urlBasket)
  }

  public updateProductFromBasket(product: IProduct) {
    return this.http.patch<IProduct>(
      `${environment.urlBasket}/${product.id}`,
      product
    )
  }

  public deleteProductFromBasket(id: number) {
    return this.http.delete(`${environment.urlBasket}/${id}`)
  }
}
