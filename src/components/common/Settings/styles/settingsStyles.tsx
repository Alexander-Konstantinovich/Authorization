import { Divider, Layout, Spin } from "antd"
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

export const StyledSpinSignedUser = styled(Spin)`
  display: flex;
  margin-left: 100px;
  margin-top: 25px;
`
export const StyledDivider = styled(Divider)`
  padding-top: 15px !important;
  font-size: 22px !important;
  border-width: 9px !important;
  border-color: #8c8b8b !important;
`
