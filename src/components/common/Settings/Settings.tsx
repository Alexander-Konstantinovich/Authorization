import Title from "antd/es/typography/Title"
import { StyledContent, StyledLayout } from "./styles/settingsStyles"
import { Divider } from "antd"
import ChangePassword from "./UserDataSettings/ChangePassword"
import LogOut from "./UserDataSettings/LogOut"
import LanguageSwitcher from "./VisualSettings/SelectLanguage"
import { useTranslation } from "react-i18next"


const Settings = () => {
  const { t } = useTranslation()

  return (
    <StyledLayout>
      <StyledContent>
        <Title style={{ textAlign: "left", margin: 15, fontSize: 30 }}>
          {t("settings.settings")}
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
          {t("settings.settings user")}
        </Divider>
        <ChangePassword />
        <LogOut />
        <Divider
          orientation="left"
          style={{
            paddingTop: 15,
            fontSize: 22,
            borderWidth: 9,
            borderColor: "#8c8b8b",
          }}
        >
          {t("settings.language")}
        </Divider>
        <LanguageSwitcher />
      </StyledContent>
    </StyledLayout>
  )
}

export default Settings
