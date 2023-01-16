import {Component, Inject, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import {
  ButtonType,
  CONDITION_TYPES,
  EDITION_TYPES,
  GENRE_TYPES,
  ISelectValue,
} from '../../constants'

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
})
export class DialogBoxComponent implements OnInit {
  public form: FormGroup
  public buttonType = this.data?.id ? ButtonType.Edit : ButtonType.Add
  public genreList: ISelectValue[] = GENRE_TYPES
  public editionList: ISelectValue[] = EDITION_TYPES
  public conditionList: ISelectValue[] = CONDITION_TYPES

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {}

  public ngOnInit(): void {
    console.log(this.genreList)

    this.form = this.fb.group({
      id: [this.data?.id ?? null],
      artist: [this.data?.artist ?? '', [Validators.required]],
      album: [this.data?.album ?? '', [Validators.required]],
      year: [
        this.data?.year ?? '',
        [
          Validators.required,
          Validators.min(1930),
          Validators.max(2023),
          Validators.pattern(/^\d+$/),
        ],
      ],
      price: [
        this.data?.price ?? '',
        [Validators.required, Validators.min(0), Validators.pattern(/^\d+$/)],
      ],
      image: [this.data?.image ?? ''],
      genre: [this.data?.configuration?.genre ?? ''],
      edition: [this.data?.configuration?.edition ?? ''],
      condition: [this.data?.configuration?.condition ?? ''],
    })
  }

  public onNoClick(): void {
    this.dialogRef.close(null)
  }

  public onSubmit(): void {
    const {id, artist, album, year, price, image, genre, edition, condition} =
      this.form.value
    this.data = {
      id: id,
      artist: artist,
      album: album,
      year: year,
      price: price,
      image: image ? image : 'assets/images/no_cover.jpg',
      configuration: {
        genre: genre ? genre : 'Not provided',
        edition: edition ? edition : 'Not provided',
        condition: condition ? condition : 'Not provided',
      },
    }

    this.dialogRef.close(this.data)
  }
}
