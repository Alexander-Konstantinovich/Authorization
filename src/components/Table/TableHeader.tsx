import { Button, Input, message, Modal } from "antd"
import { useState } from "react"
import { AddItemInput, DivHeaderTable } from "./styles/tableStyles"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import {
  selectPostTable,
  selectTableResponseItem,
} from "../../redux/tablePost/selectors"
import {
  setCategory,
  setDescription,
  setFetchingStatus,
  setImage,
  setPrice,
  setTitle,
} from "../../redux/tablePost/slice"
import { postAddProducts } from "../../redux/tablePost/asyncActions"
import { addItem } from "../../redux/table/slice"

const TableHeader = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messageApi, contextHolder] = message.useMessage()

  const dispatch = useAppDispatch()
  const { title, price, category, description, image } =
    useAppSelector(selectPostTable)
  const responseItem = useAppSelector(selectTableResponseItem)

  const showModal = () => {
    setIsOpen(true)
  }

  const info = () => {
    messageApi.info("Товар успешно добавлен")
  }

  const handleOk = () => {
    dispatch(setFetchingStatus(true))

    setTimeout(() => {
      dispatch(postAddProducts({ title, price, category, description, image }))

      dispatch(addItem(responseItem))
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
      <Input
        placeholder="Enter the products name"
        style={{ margin: 10, width: 200 }}
      />
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

export default TableHeader
