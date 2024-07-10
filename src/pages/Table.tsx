import { useEffect } from "react"
import { Space, Table, Typography } from "antd"
import type { TableColumnsType } from "antd"
import { useAppSelector, useAppDispatch } from "../redux/hooks"
import { selectTable } from "../redux/table/selectors"
import { fetchAddProducts } from "../redux/table/asyncActions"
import styled from "styled-components"
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import type { TableItem } from "../redux/table/types"
import { setRemoveItem } from "../redux/table/slice"

export const TableColumns = styled.div<{ mode?: string }>`
  :where(.css-dev-only-do-not-override-f7vrd6).ant-table-wrapper .ant-table {
    border-radius: 0px;
  }
`

const columns: TableColumnsType<TableItem> = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    width: "50px",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "20%",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    width: "7%",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    width: "10%",
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
    ellipsis: true,
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    ellipsis: true,
  },
]

const TableProducts: React.FC = () => {
  const dispatch = useAppDispatch()

  const products = useAppSelector(selectTable)
  console.log(products)

  const handleRemoveItem = (id: number) => {
    dispatch(setRemoveItem(id))
  }

  const newColumns = [...columns]
  newColumns.push({
    title: "Action",
    width: 100,
    key: "action",
    fixed: "right",
    render: products => (
      <Space>
        <Typography.Link>
          <EditOutlined />
        </Typography.Link>
        <Typography.Link onClick={() => handleRemoveItem(products.id)}>
          <DeleteOutlined />
        </Typography.Link>
      </Space>
    ),
  })

  useEffect(() => {
    dispatch(fetchAddProducts())
  }, [])

  return (
    <TableColumns>
      <Table
        dataSource={products}
        columns={newColumns}
        bordered
        pagination={{
          style: { backgroundColor: "#fff", margin: 0, padding: 16 },
        }}
      />
    </TableColumns>
  )
}

export default TableProducts
