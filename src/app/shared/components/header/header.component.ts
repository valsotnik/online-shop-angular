import {ProductsService} from './../../../services/products.service'
import {Component, Input, TemplateRef} from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() productsActionTemplate!: TemplateRef<any>
}
