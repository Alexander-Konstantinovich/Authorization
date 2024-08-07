import { Layout } from "antd"
import styled from "styled-components"

const { Content } = Layout

export const StyledLayout = styled(Layout)`
	overflow: hidden;
  width: 100%;
  max-width: 100%;
  height: 100vh;
`;

export const StyledContent = styled(Content)`
	text-align: center;
  height: 100%;
  line-height: 120px;
  background-color: #fff;	
`;
