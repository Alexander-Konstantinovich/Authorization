import { Button, Popconfirm } from "antd"
import { auth } from "../../../../fairbase"
import { deleteUser } from "firebase/auth"
import { useNavigate } from "react-router"

const DeleteUser = () => {
  const user = auth.currentUser
	const navigate = useNavigate()

  function deleteAccount() {
    if (user) {
      deleteUser(user)
        .then(() => {
					navigate("/registration")
          console.log("Account has been successfully deleted")
        })
        .catch(er => {
          console.log(er)
        })
    }
  }

  return (
    <Popconfirm title="Sure to delete?" onConfirm={deleteAccount}>
      <Button type="primary" danger style={{ marginLeft: 37 }}>
        Delete account
      </Button>
    </Popconfirm>
  )
}

export default DeleteUser
