export interface ResponseTableItem {
	id:number
  title: string
  price: string
  category: string
  description: string
  image: string
}

export interface InitialEditTable {
  title: string
  price: string
  category: string
  description: string
  image: string
  responseItem: ResponseTableItem
}