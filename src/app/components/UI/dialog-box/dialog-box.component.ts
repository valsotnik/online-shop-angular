import {Component, Inject, OnInit} from '@angular/core'
import {FormBuilder, FormGroup} from '@angular/forms'
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
})
export class DialogBoxComponent implements OnInit {
  public form: FormGroup

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.form = this.fb.group({
      artist: [''],
      album: [''],
      year: [''],
      price: [''],
      image: [''],
      genre: [''],
      edition: [''],
      condition: [''],
      bestseller: [''],
    })
  }

  public onNoClick(): void {
    this.dialogRef.close()
  }

  public onSubmit(): void {
    const {
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
