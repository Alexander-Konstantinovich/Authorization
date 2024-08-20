import Title from "antd/es/typography/Title"
import { StyledContent, StyledDivider, StyledLayout } from "./styles/settingsStyles"
import ChangePassword from "./UserDataSettings/ChangePassword"
import LogOut from "./UserDataSettings/LogOut"
import LanguageSwitcher from "./VisualSettings/SelectLanguage"
import { useTranslation } from "react-i18next"
import ThemeSwitcher from "./VisualSettings/SelectTheme"


const Settings = () => {
  const { t } = useTranslation()

  return (
    <StyledLayout>
      <StyledContent>
        <Title style={{ textAlign: "left", margin: 15, fontSize: 30 }}>
          {t("settings.settings")}
        </Title>
        <StyledDivider
          orientation="left"
        >
          {t("settings.settings user")}
        </StyledDivider>
        <ChangePassword />
        <LogOut />
        <StyledDivider
          orientation="left"
        >
          {t("settings.language")}
        </StyledDivider>
        <LanguageSwitcher />
        <StyledDivider
          orientation="left"
        >
          Theme
        </StyledDivider>
        <ThemeSwitcher />
      </StyledContent>
    </StyledLayout>
  )
}

export default Settings
