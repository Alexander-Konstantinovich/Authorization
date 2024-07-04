import "./App.css"
import AuthDetails from "./components/auth/AuthDetails"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
import {
  layoutStyle,
  headerStyle,
  contentStyle,
} from "./components/auth/styles/appStyles"

import { GlobalStyle, Title } from "./components/auth/styles/appStyles"
import { Flex, Layout } from "antd"

const { Header, Content } = Layout

const App: React.FC = () => {
  return (
    <Flex gap="middle" wrap>
      <GlobalStyle />
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <Title>React authorization</Title>
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
