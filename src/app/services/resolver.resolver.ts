import {ProductsService} from './products.service'
import {IProduct} from './../models/products'
import {Injectable} from '@angular/core'
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router'
import {catchError, EMPTY, Observable, of} from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ProductResolver implements Resolve<IProduct> {
  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IProduct> {
    return this.productService.getProduct(route.params?.['id']).pipe(
      catchError(() => {
        this.router.navigate(['products'])
        return EMPTY
      })
    )
  }
}
