import {Component, Inject, OnInit} from '@angular/core'
import {FormBuilder, FormGroup} from '@angular/forms'
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import {ButtonType} from '../../constants'

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
})
export class DialogBoxComponent implements OnInit {
  public form: FormGroup
  public buttonType = this.data?.id ? ButtonType.Edit : ButtonType.Add

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.data?.id ?? null],
      artist: [this.data?.artist ?? ''],
      album: [this.data?.album ?? ''],
      year: [this.data?.year ?? ''],
      price: [this.data?.price ?? ''],
      image: [this.data?.image ?? ''],
      genre: [this.data?.configuration?.genre ?? ''],
      edition: [this.data?.configuration?.edition ?? ''],
      condition: [this.data?.configuration?.condition ?? ''],
      bestseller: [this.data?.configuration?.bestseller ?? ''],
    })
  }

  public onNoClick(): void {
    this.dialogRef.close(null)
  }

  public onSubmit(): void {
    const {
      id,
      artist,
      album,
      year,
      price,
      image,
      genre,
      edition,
      condition,
      bestseller,
    } = this.form.value
    this.data = {
      id: id,
      artist: artist,
      album: album,
      year: year,
      price: price,
      image: image ? image : 'assets/images/no_cover.jpg',
      configuration: {
        genre: genre,
        edition: edition,
        condition: condition,
        bestseller: bestseller,
      },
    }

    this.dialogRef.close(this.data)
  }
}
