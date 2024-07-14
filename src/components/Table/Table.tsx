/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { Popconfirm, Space, Table, Typography } from "antd"
import type { TableColumnsType } from "antd"
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import { useAppSelector, useAppDispatch } from "../../redux/hooks"
import {  selectTableDisplayedItems } from "../../redux/table/selectors"
import { fetchAddProducts } from "../../redux/table/asyncActions"
import type { TableItem } from "../../redux/table/types"
import { setRemoveItem } from "../../redux/table/slice"
import { TableColumns } from "./styles/tableStyles"
import TableHeader from "./TableHeader"

// interface ProductProps {
//   id: number;
// }

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
    sorter: (a, b) => parseFloat(a.price) - parseFloat(b.price),
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
  const products = useAppSelector(selectTableDisplayedItems)
  // const productById = useAppSelector((state) => selectTableById(state, id));
  // console.log(productById?.id)

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
        <Popconfirm
          title="Sure to delete?"
          onConfirm={() => handleRemoveItem(products.id)}
        >
          <DeleteOutlined />
        </Popconfirm>
      </Space>
    ),
  })

  useEffect(() => {
    dispatch(fetchAddProducts())
  }, [])

  return (
    <TableColumns>
      <TableHeader />
      <Table
        dataSource={products}
        columns={newColumns}
        bordered
        pagination={{
          style: { backgroundColor: "#fff", margin: 0, padding: 16 }, totalBoundaryShowSizeChanger: 1
        }}
      />
    </TableColumns>
  )
}

export default TableProducts
