import { Button, message, Modal } from "antd"
import { useState } from "react"
import { AddItemInput, DivHeaderTable } from "../styles/tableStyles"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks"
import { selectPostTable } from "../../../redux/tablePost/selectors"
import {
  setCategory,
  setDescription,
  setFetchingStatus,
  setImage,
  setPrice,
  setTitle,
} from "../../../redux/tablePost/slice"
import { postAddProducts } from "../../../redux/tablePost/asyncActions"
import { addItem } from "../../../redux/table/slice"
import { selectTableDisplayedItems } from "../../../redux/table/selectors"
import SearchTable from "./SearchTable"

const TableButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messageApi, contextHolder] = message.useMessage()

  const dispatch = useAppDispatch()
  const { title, price, category, description, image } =
    useAppSelector(selectPostTable)
  const responseItemId = useAppSelector(selectTableDisplayedItems)

  const showModal = () => {
    setIsOpen(true)
  }

  const info = () => {
    messageApi.info("Товар успешно добавлен")
  }

  const handleOk = () => {
    dispatch(setFetchingStatus(true))

    setTimeout(() => {
      const maxId =
        responseItemId.length > 0
          ? Math.max(...responseItemId.map(item => item.id))
          : 0
      const newId = maxId + 1

      const newItem = {
        id: newId,
        title,
        price,
        category,
        description,
        image,
      }
      dispatch(postAddProducts(newItem))

      dispatch(addItem(newItem))
      dispatch(setFetchingStatus(false))

      dispatch(setTitle(""))
      dispatch(setPrice(""))
      dispatch(setCategory(""))
      dispatch(setDescription(""))
      dispatch(setImage(""))

      setIsOpen(false)
      info()
    }, 800)
  }

  const handleCancel = () => {
    setIsOpen(false)
  }

  return (
    <DivHeaderTable style={{ background: "#fff" }}>
      {contextHolder}
      <SearchTable />
      <Button
        type="primary"
        onClick={showModal}
        style={{ margin: 10, width: 120 }}
      >
        Add item
      </Button>
      <Modal
        title="Enter data for adding new product"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <AddItemInput
          placeholder="title"
          value={title}
          onChange={e => dispatch(setTitle(e.target.value))}
        />
        <AddItemInput
          placeholder="price"
          value={price}
          onChange={e => dispatch(setPrice(e.target.value))}
        />
        <AddItemInput
          placeholder="category"
          value={category}
          onChange={e => dispatch(setCategory(e.target.value))}
        />
        <AddItemInput
          placeholder="description"
          value={description}
          onChange={e => dispatch(setDescription(e.target.value))}
        />
        <AddItemInput
          placeholder="image"
          value={image}
          onChange={e => dispatch(setImage(e.target.value))}
        />
      </Modal>
    </DivHeaderTable>
  )
}

export default TableButton
