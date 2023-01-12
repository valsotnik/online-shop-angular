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
}
