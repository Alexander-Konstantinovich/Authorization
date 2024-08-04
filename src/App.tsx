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
import Nav from "./components/common/Nav"
import PrivateRoute from "./components/auth/PrivateRoute"
import MainLayout from "./layouts/MainLayout"
import TableProducts from "./components/common/Table/Table"
import Support from "./components/common/Support"
import Settings from "./components/common/Settings"

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
                <Route path="/" element={<Navigate to="table" replace />} />
                <Route path="table" element={<TableProducts />} />
                <Route path="nav" element={<Nav />} />
                <Route path="support" element={<Support />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Route>
          </Routes>
        </Content>
      </Layout>
    </Flex>
  )
}

export default App
