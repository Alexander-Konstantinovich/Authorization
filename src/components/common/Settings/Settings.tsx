import Title from "antd/es/typography/Title"
import { StyledContent, StyledLayout } from "./styles/settingsStyles"
import { Divider } from "antd"
import ChangePassword from "./ChangeUserData/ChangePassword"

const Settings = () => {
  return (
    <StyledLayout>
      <StyledContent>
        <Title style={{ textAlign: "left", margin: 15, fontSize: 30}}>
          Settings
        </Title>
        <Divider orientation="left" style={{paddingTop: 15,fontSize: 22, borderWidth:9, borderColor: "#8c8b8b"}}>Settings user</Divider>
        <ChangePassword />
      </StyledContent>
    </StyledLayout>
  )
}

export default Settings
