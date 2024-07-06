import "./App.css"
import AuthDetails from "./components/auth/AuthDetails"
import {
  layoutStyle,
  headerStyle,
  contentStyle,
} from "./components/auth/styles/appStyles"

import { Route, Routes } from "react-router-dom"
import { GlobalStyle, Title } from "./components/auth/styles/appStyles"
import { Flex, Layout } from "antd"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"

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
          <Routes>
            <Route path="/login" element={<SignInPage />} />
            <Route path="/registration" element={<SignUpPage />} />
            <Route path="/AuthDetails" element={<AuthDetails />} />
          </Routes>
        </Content>
      </Layout>
    </Flex>
  )
}

export default App
