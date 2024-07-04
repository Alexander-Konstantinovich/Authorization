import "./App.css"
import AuthDetails from "./components/auth/AuthDetails"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
import {
  layoutStyle,
  headerStyle,
  contentStyle,
} from "./components/auth/styles/flexStyles"

import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

import { Flex, Layout } from "antd"

const { Header, Content } = Layout

const GlobalStyle = createGlobalStyle`
  body {
  background-color:  #f6dfe3;
  }
`

const App: React.FC = () => {
  return (
    <Flex gap="middle" wrap>
      <GlobalStyle />
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <h1>React authorization</h1>
        </Header>
        <Content style={contentStyle}>
          <SignUp />
          <SignIn />
          <AuthDetails />
        </Content>
      </Layout>
    </Flex>
  )
}

export default App
