export enum ButtonType {
  Edit = 'Edit Product',
  Add = 'Add Product',
  Discard = 'Discard',
}

export interface ISelectValue {
  value: string
  viewValue: string
}

export const EDITION_TYPES: ISelectValue[] = [
  {value: 'original', viewValue: 'Original'},
  {value: 'extended', viewValue: 'Extended'},
  {value: 'deluxe', viewValue: 'Deluxe'},
  {value: 'other', viewValue: 'Other'},
]

export const CONDITION_TYPES: ISelectValue[] = [
  {value: 'new', viewValue: 'New'},
  {value: 'package', viewValue: 'Package'},
  {value: 'used', viewValue: 'Used'},
]

export const GENRE_TYPES: ISelectValue[] = [
  {value: 'pop', viewValue: 'Pop'},
  {value: 'dance', viewValue: 'Dance'},
  {value: 'house', viewValue: 'House'},
  {value: 'r&b', viewValue: 'R&B'},
  {value: 'rap', viewValue: 'Rap'},
  {value: 'rock', viewValue: 'Rock'},
  {value: 'alternative', viewValue: 'Alternative'},
  {value: 'metal', viewValue: 'Metal'},
  {value: 'hardcore', viewValue: 'Hardcore'},
  {value: 'electro', viewValue: 'Electro'},
  {value: 'other', viewValue: 'Other'},
]
