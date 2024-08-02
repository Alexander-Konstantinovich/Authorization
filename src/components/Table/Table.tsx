import { useEffect, useState } from "react"
import { Button, Input, Popconfirm, Space, Table, Typography } from "antd"
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import { useAppSelector, useAppDispatch } from "../../redux/hooks"
import { selectTableDisplayedItems } from "../../redux/table/selectors"
import { fetchAddProducts } from "../../redux/table/asyncActions"
import type { TableItem } from "../../redux/table/types"
import { setRemoveItem, setUpdateProduct } from "../../redux/table/slice"
import { TableColumns } from "./styles/tableStyles"
import TableButton from "./TableHeader/TableButton"
import type { ColumnType } from "antd/es/table"

interface EditableColumnType<T> extends ColumnType<T> {
  editable?: boolean
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
  const [editingKey, setEditingKey] = useState("") //состояние для отслеживания редактируемой строки.
  const [formData, setFormData] = useState<TableItem | null>(null) //для хранения редактируемого продукта.

  const handleRemoveItem = (id: number) => {
    dispatch(setRemoveItem(id))
  }

  const isEditing = (record: TableItem) => record.id === Number(editingKey) //функция, которая определяет, редактируется ли данная строка.

  const edit = (record: TableItem) => {
    //функция, которая запускает редактирование строки.
    setEditingKey(String(record.id))
    setFormData(record)
  }

  const cancel = () => {
    //функция, которая отменяет редактирование.
    setEditingKey("")
    setFormData(null)
  }

  const save = async () => {
    //функция, которая сохраняет изменения в строке.
    try {
      if (formData) {
        await dispatch(setUpdateProduct(formData))
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
    //key позволяет определить, какое именно свойство мы редактируем. keyof -означает что key может быть любым из свойств TableItem
    if (formData) {
      setFormData({ ...formData, [key]: e.target.value })
    }
  }

  const renderEditable = (
    text: string,
    record: TableItem,
    key: keyof TableItem,
  ) => {
    // отвечает за отображение ячейки таблицы
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
      title: col.title,
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
    render: products => (
      <Space>
        {isEditing(products) ? (
          <>
            <Button type="primary" onClick={save}>
              Save
            </Button>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <Button>Cancel</Button>
            </Popconfirm>
          </>
        ) : (
          <>
            <Typography.Link onClick={() => edit(products)}>
              <EditOutlined />
            </Typography.Link>
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleRemoveItem(products.id)}
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
        columns={newColumns}
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
