export interface IProduct {
  id: number
  artist: string
  album: string
  year: number
  price: number
  image: string
  configuration: IConfiguration
}

export interface IConfiguration {
  genre: string
  edition: string
  condition: string
  bestseller: boolean
}
