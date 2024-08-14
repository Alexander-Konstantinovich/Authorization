import { Button } from "antd"
import { DivLogOutSettings } from "../styles/settingsStyles"
import DeleteUser from "./DeleteUser"
import { signOut } from "firebase/auth"
import { auth } from "../../../../fairbase"
import { useNavigate } from "react-router"

const LogOut = () => {
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
        Logout
      </Button>
      <DeleteUser />
    </DivLogOutSettings>
  )
}

export default LogOut
