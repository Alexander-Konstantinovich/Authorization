import { Button } from "antd"
import { DivLogOutSettings } from "../styles/settingsStyles"
import DeleteUser from "./DeleteUser"
import { signOut } from "firebase/auth"
import { auth } from "../../../../fairbase"
import { useNavigate } from "react-router"
import { useTranslation } from "react-i18next"

const LogOut = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  function userSignOut() {
    signOut(auth)
      .then(() => {
        console.log("success")
        navigate("/login")
      })
      .catch(er => console.log(er))
  }

  return (
    <DivLogOutSettings>
      <Button type="default" onClick={userSignOut}>
        {t("settings.logout")}
      </Button>
      <DeleteUser />
    </DivLogOutSettings>
  )
}

export default LogOut
