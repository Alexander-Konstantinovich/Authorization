import { useEffect, useState } from "react"
import { Button, Input, Popconfirm, Space, Table, Typography } from "antd"
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import { useAppSelector, useAppDispatch } from "../../../redux/hooks"
import { selectTableDisplayedItems } from "../../../redux/table/selectors"
import { fetchAddProducts } from "../../../redux/table/asyncActions"
import type { TableItem } from "../../../redux/table/types"
import { setRemoveItem, setUpdateProduct } from "../../../redux/table/slice"
import { TableColumns } from "./styles/tableStyles"
import TableButton from "./TableHeader/TableButton"
import type { ColumnsType, ColumnType } from "antd/es/table"

interface EditableColumnType<T> extends ColumnType<T> {
  editable?: boolean
  onCell?: (record: T) => {
    record: T
    editable: boolean
    dataIndex: keyof T
    title: string
  }
}

const columns: EditableColumnType<TableItem>[] = [
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
    editable: true,
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    width: "7%",
    editable: true,
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
    editable: true,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    ellipsis: true,
    editable: true,
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    ellipsis: true,
    editable: true,
  },
]

const TableProducts: React.FC = () => {
  const dispatch = useAppDispatch()
  const products = useAppSelector(selectTableDisplayedItems)
  const [editingKey, setEditingKey] = useState("")
  const [formData, setFormData] = useState<TableItem | null>(null)

  const handleRemoveItem = (id: number) => {
    dispatch(setRemoveItem(id))
  }

  const isEditing = (record: TableItem) => record.id === Number(editingKey)

  const edit = (record: TableItem) => {
    setEditingKey(String(record.id))
    setFormData(record)
  }

  const cancel = () => {
    setEditingKey("")
    setFormData(null)
  }

  const save = async () => {
    try {
      if (formData) {
        dispatch(setUpdateProduct(formData))
        setEditingKey("")
        setFormData(null)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof TableItem,
  ) => {
    if (formData) {
      setFormData({ ...formData, [key]: e.target.value })
    }
  }

  const renderEditable = (
    text: string,
    record: TableItem,
    key: keyof TableItem,
  ) => {
    return isEditing(record) ? (
      <Input
        value={formData ? formData[key] : text}
        onChange={event => handleInputChange(event, key)}
      />
    ) : (
      text
    )
  }

  const modifiedColumns = columns.map(col => ({
    ...col,
    onCell: (record: TableItem) => ({
      record,
      editable: col.editable,
      dataIndex: col.dataIndex,
      style: col.title !== null ? { title: col.title } : {},
    }),
    render: (text: string, record: TableItem) =>
      renderEditable(text, record, col.dataIndex as keyof TableItem),
  }))

  const newColumns = [...modifiedColumns]
  newColumns.push({
    title: "Action",
    width: 100,
    key: "action",
    fixed: "right",
    onCell: (record: TableItem) => ({
      record,
      editable: false,
      dataIndex: "action",
      style: record.title !== null ? { title: "Action" } : {},
    }),
    render: (text: string, record: TableItem) => (
      <Space>
        {isEditing(record) ? (
          <>
            <Button type="primary" onClick={() => save()}>
              Save
            </Button>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <Button>Cancel</Button>
            </Popconfirm>
          </>
        ) : (
          <>
            <Typography.Link onClick={() => edit(record)}>
              <EditOutlined />
            </Typography.Link>
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleRemoveItem(record.id)}
            >
              <DeleteOutlined />
            </Popconfirm>
          </>
        )}
      </Space>
    ),
  })

  useEffect(() => {
    dispatch(fetchAddProducts())
  }, [])

  return (
    <TableColumns>
      <TableButton />
      <Table
        dataSource={products}
        columns={newColumns as ColumnsType<any>}
        bordered
        pagination={{
          style: { backgroundColor: "#fff", margin: 0, padding: 16 },
          totalBoundaryShowSizeChanger: 1,
        }}
      />
    </TableColumns>
  )
}

export default TableProducts
