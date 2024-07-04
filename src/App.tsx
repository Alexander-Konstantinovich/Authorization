import "./App.css"
import AuthDetails from "./components/auth/AuthDetails"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"

import { Flex, Layout } from 'antd';

const { Header, Content } = Layout;

const layoutStyle: React.CSSProperties = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(100%)',
  maxWidth: 'calc(100%)',
  background: 'linear-gradient(135deg, #1f6578, #1ea187, #f4d6db)',
};

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 94,
  paddingInline: 48,
  lineHeight: '64px',
  background: 'linear-gradient(to bottom, #0f3d48, #1f6578)',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
};



const App: React.FC = () => {
  return(
  <div>
  <Flex gap="middle" wrap>
    <Layout style={layoutStyle}>
      <Header style={headerStyle}><h1>React authorization</h1></Header>
      <Content style={contentStyle}>
      <SignUp />
      <SignIn />
     <AuthDetails />
      </Content>
    </Layout>

    
  </Flex>
  </div>
)};





// const App = () => {
//   return <div>
//     <SignUp />
//     <SignIn />
//     <AuthDetails />
//   </div>
// }
export default App
