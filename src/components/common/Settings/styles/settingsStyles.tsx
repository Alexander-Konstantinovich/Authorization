import { Layout } from "antd"
import styled from "styled-components"

const { Content } = Layout

export const StyledLayout = styled(Layout)`
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  height: 100vh;
`

export const StyledContent = styled(Content)`
  text-align: center;
  height: 100%;
  line-height: 120px;
  background-color: #fff;
`

export const InputBlur = styled.div`
  opacity: 0.9;
`

export const DivLogOutSettings = styled.div`
  display: flex;
  margin-left: 363px;
`

export const StyledUserEmail = styled.p`
  display: flex;
  margin: 15px;
  padding: 8px;
  border: 2px solid;
  border-radius: 15px;
  width: 210px;
  line-height: normal;
  border-color: #1dbbb0;
  font-size: 14px;
  font-weight: 500;
`
