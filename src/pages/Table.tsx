import { useEffect } from "react"
import { Table } from "antd"
import type { TableColumnsType } from "antd"
import { useAppSelector, useAppDispatch } from "../redux/hooks"
import { selectTable } from "../redux/table/selectors"
import { fetchAddProducts } from "../redux/table/asyncActions"
import styled from "styled-components"
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"

export const TableColumns = styled.div<{ mode?: string }>`
  :where(.css-dev-only-do-not-override-f7vrd6).ant-table-wrapper .ant-table {
    border-radius: 0px;
  }
`

interface TypeColumn {
  key: React.Key
  price: number
  category: string
}

const columns: TableColumnsType<TypeColumn> = [
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
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    showSorterTooltip: { target: "full-header" },
    filters: [
      {
        text: "men's clothing",
        value: "men's clothing",
      },
      {
        text: "jewelery",
        value: "jewelery",
      },
      {
        text: "electronics",
        value: "electronics",
      },
      {
        text: "women's clothing",
        value: "women's clothing",
      },
    ],
    onFilter: (value, record) => record.category.indexOf(value as string) === 0,
    sortDirections: ["descend"],
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

  return (
    <TableColumns>
      <Table
        dataSource={products}
        columns={columns}
        bordered
        pagination={{
          style: { backgroundColor: "#fff", margin: 0, padding: 16 },
        }}
      />
    </TableColumns>
  )
}

export default TableProducts
