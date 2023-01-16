import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
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
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatSelectModule} from '@angular/material/select'
import {MatCheckboxModule} from '@angular/material/checkbox'

@NgModule({
  declarations: [HeaderComponent, DialogBoxComponent, DialogDetailsComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  exports: [HeaderComponent, DialogBoxComponent],
})
export class SharedModule {}
