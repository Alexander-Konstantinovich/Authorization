import { Input } from "antd"
import type {InputRef} from "antd"
import { ClearOutlined } from "@ant-design/icons"
import { useAppDispatch } from "../../../redux/hooks"
import { useCallback, useEffect, useRef, useState } from "react"
import { searchItem } from "../../../redux/table/slice"
import debounce from "debounce"

const SearchTable = () => {
  const [searchValue, setSearchValue] = useState("")
  const dispatch = useAppDispatch()
  const inputRef = useRef<InputRef>(null)

  const handleSearch = useCallback(
    debounce(str => {
      dispatch(searchItem(str))
    }, 250),
    [],
  )

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
    handleSearch(event.target.value)
    
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchValue]);

  

  return (
    <Input
      placeholder="Enter the products name"
      style={{ margin: 10, width: 200 }}
      value={searchValue}
      onChange={onChangeInput}
      addonAfter={
        searchValue ? <ClearOutlined onClick={() => setSearchValue('')} /> : null
      }
      ref={inputRef}
    />
  )
}

export default SearchTable
