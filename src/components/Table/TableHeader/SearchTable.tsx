import { Input } from "antd"
import { useAppDispatch } from "../../../redux/hooks"
import { useCallback, useState } from "react"
import { searchItem } from "../../../redux/table/slice"
import debounce from "debounce"

const SearchTable = () => {
  const [searchValue, setSearchValue] = useState("")
  const dispatch = useAppDispatch()

  const handleSearch = useCallback(
    debounce(str => {
      dispatch(searchItem(str))
    }, 222),
    [],
  )

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
    handleSearch(event.target.value)
  }

  return (
    <Input
      placeholder="Enter the products name"
      style={{ margin: 10, width: 200 }}
      value={searchValue}
      onChange={onChangeInput}
    />
  )
}

export default SearchTable
