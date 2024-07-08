import { useEffect } from "react"
import { Table } from "antd"
import { useAppSelector, useAppDispatch } from "../redux/hooks"
import { selectTable } from "../redux/table/selectors"
import { fetchAddProducts } from "../redux/table/asyncActions"

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
  },
]

const TableProducts: React.FC = () => {
  const dispatch = useAppDispatch()

  const products = useAppSelector(selectTable)
  console.log(products)

  useEffect(() => {
    dispatch(fetchAddProducts())
  }, [])

  return <Table dataSource={products} columns={columns} />
}

export default TableProducts
