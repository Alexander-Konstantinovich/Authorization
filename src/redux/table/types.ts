export interface TableItem {
  id: number
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
  items: TableItem[]
  status: Status
  displayedItems:TableItem[]
}
