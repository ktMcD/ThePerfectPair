export interface IFoodWinePair {
    pairedWines: string[]
    pairingText: string
    productMatches: IProductMatch[]
    status: string
  }
  export interface IProductMatch {
    id: number
    title: string
    description: string
    price: string
    imageUrl: string
    averageRating: number
    ratingCount: number
    score: number
    link: string
  }