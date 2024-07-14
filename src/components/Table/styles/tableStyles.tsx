import { Input } from "antd"
import styled from "styled-components"

export const TableColumns = styled.div<{ mode?: string }>`
  :where(.css-dev-only-do-not-override-f7vrd6).ant-table-wrapper .ant-table {
    border-radius: 0px;
  }
  :where(.css-dev-only-do-not-override-f7vrd6).ant-empty .ant-empty-image svg {
    display: none;
  }
  :where(.css-dev-only-do-not-override-f7vrd6).ant-empty-normal
    .ant-empty-description {
    color: rgba(0, 0, 0, 0.45);
    display: none;
  }
`
export const DivHeaderTable = styled.div<{ mode?: string }>`
  display: flex;
  justify-content: space-between;
`

export const AddItemInput = styled(Input)`
	margin-bottom: 10px;
`