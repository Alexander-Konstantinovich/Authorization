import Title from "antd/es/typography/Title"
import { StyledContent, StyledLayout } from "./styles/settingsStyles"
import { Divider } from "antd"
import ChangePassword from "./UserDataSettings/ChangePassword"
import LogOut from "./UserDataSettings/LogOut"

const Settings = () => {
  return (
    <StyledLayout>
      <StyledContent>
        <Title style={{ textAlign: "left", margin: 15, fontSize: 30 }}>
          Settings
        </Title>
        <Divider
          orientation="left"
          style={{
            paddingTop: 15,
            fontSize: 22,
            borderWidth: 9,
            borderColor: "#8c8b8b",
          }}
        >
          Settings user
        </Divider>
        <ChangePassword />
        <LogOut />
      </StyledContent>
    </StyledLayout>
  )
}

export default Settings
