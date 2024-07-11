import "./App.css"
import {
  layoutStyle,
  headerStyle,
  contentStyle,
} from "./components/auth/styles/appStyles"

import { Navigate, Route, Routes } from "react-router-dom"
import { GlobalStyle, Title } from "./components/auth/styles/appStyles"
import { Flex, Layout } from "antd"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import Table from "./pages/Table"
import Nav from "./pages/Nav"
import PrivateRoute from "./components/auth/PrivateRoute"
import MainLayout from "./layouts/MainLayout"

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
            <Route path="/" element={<PrivateRoute />}>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Navigate to="/table" replace />} />
                <Route path="/table" element={<Table />} />
                <Route path="/nav" element={<Nav />} />
              </Route>
            </Route>
          </Routes>
        </Content>
      </Layout>
    </Flex>
  )
}

export default App
