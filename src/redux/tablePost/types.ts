export interface PostTableItem {
  title: string
  price: string
  category: string
  description: string
  image: string
}
export interface ResTableItem {
	id:number
  title: string
  price: string
  category: string
  description: string
  image: string
}

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface TableInitial {
  status: Status
}
