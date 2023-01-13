import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ReactiveFormsModule} from '@angular/forms'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {MatIconModule} from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'

import {AppRoutingModule} from '../app-routing.module'
import {HeaderComponent} from './components/header/header.component'
import {DialogBoxComponent} from './components/dialog-box/dialog-box.component'
import {DialogDetailsComponent} from './components/dialog-details/dialog-details.component'
import {MatCardModule} from '@angular/material/card'
import {MatBadgeModule} from '@angular/material/badge'

@NgModule({
  declarations: [HeaderComponent, DialogBoxComponent, DialogDetailsComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
  ],
  exports: [HeaderComponent, DialogBoxComponent],
})
export class SharedModule {}
