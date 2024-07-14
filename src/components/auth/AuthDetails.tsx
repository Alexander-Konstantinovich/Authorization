import React from "react"
import { auth } from "../../fairbase"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { Button } from "antd"



const AuthDetails = () => {
  const [authUser, setAuthUser] = React.useState<any>(null)
  React.useEffect(() => {
    const listen = onAuthStateChanged(auth, (user:any) => {
      if (user) {
        setAuthUser(user)
      } else { 
        setAuthUser(null)
      }
    })
    return () => {
      listen()
    }
  }, [])
  function userSignOut() {
    signOut(auth)
      .then(() => console.log("success"))
      .catch(er => console.log(er))
  }
  return (
    <div>
      {authUser ? (
        <div>
          <p>{`Signed in as ${authUser.email}`}</p>
          <Button type="primary" onClick={userSignOut}>Sign Out</Button>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}
export default AuthDetails
