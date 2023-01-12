import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {HeaderComponent} from '../header/header.component'
import {FooterComponent} from '../footer/footer.component'
import {DialogBoxComponent} from '../dialog-box/dialog-box.component'

@NgModule({
  declarations: [HeaderComponent, FooterComponent, DialogBoxComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, DialogBoxComponent],
})
export class UiModule {}
