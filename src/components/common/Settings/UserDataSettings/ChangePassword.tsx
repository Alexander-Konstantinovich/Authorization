import { Button, Form, Input } from "antd"
import { auth } from "../../../../fairbase"
import Title from "antd/es/typography/Title"
import { InputBlur, StyledUserEmail } from "../styles/settingsStyles"
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks"
import {
  setAddError,
  setCopyPasswordChange,
} from "../../../../redux/signUp/slice"
import { selectSignUp } from "../../../../redux/signUp/selectors"
import {
  setAddPassword,
  setPasswordCheck,
  setUpdatePassword,
} from "../../../../redux/signUp/slice"
import {
  EmailAuthProvider,
  onAuthStateChanged,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth"
import type { UserType } from "../../../../redux/signIn/types"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

const ChangePassword = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const { password, passwordCheck, error, copyPasswordChange } =
    useAppSelector(selectSignUp)

  const [isOldPasswordVerified, setIsOldPasswordVerified] = useState(false)
  

  const [user, setUser] = useState<any>(null) //для активного юзера
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user:any) => {
      if (user) {
        setUser(user)
      } else { 
        setUser(null)
      }
    })
    return () => {
      listen()
    }
  }, [])

  const verifyOldPassword = () => {
    const user = auth.currentUser
    if (user && user.email) {
      const credential = EmailAuthProvider.credential(user.email, passwordCheck)

      reauthenticateWithCredential(user, credential)
        .then(() => {
          setIsOldPasswordVerified(true)
          dispatch(setAddError(""))
          dispatch(setPasswordCheck(""))
        })
        .catch(error => {
          console.log(error.message)
          dispatch(setAddError("Invalid old password"))
        })
    }
  }

  function update() {
    if (password !== copyPasswordChange) {
      dispatch(setAddError("Passwords don't match"))
      return
    }

    const user = auth.currentUser
    if (user) {
      updatePassword(user, password)
        .then(() => {
          dispatch(setUpdatePassword(password))
          dispatch(setAddPassword(""))
          dispatch(setCopyPasswordChange(""))
          dispatch(setAddError(""))
          console.log("пароль обновлён")
        })
        .catch(error => {
          console.log(error.message)
        })
    }
  }

  return (
    <>
      <Title
        style={{ textAlign: "left", margin: 15, paddingTop: 20, fontSize: 20 }}
      >
        {t("settings.change your password")}
      </Title>
      {user && <StyledUserEmail>{`${t("settings.signed in as")} ${user.email}`}</StyledUserEmail>}

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, marginTop: 40 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={update}
        onFinishFailed={update}
      >
        {!isOldPasswordVerified ? (
          <Form.Item<UserType>
            label={t("settings.password")}
            name="passwordCheck"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <>
              <Input.Password
                placeholder={t("settings.please enter your password")}
                value={passwordCheck}
                onChange={e => dispatch(setPasswordCheck(e.target.value))}
              />
              <Button
                type="primary"
                style={{ marginBottom: 10, marginTop: 20 }}
                onClick={verifyOldPassword}
              >
                {t("settings.check")}
              </Button>
              {error ? <p style={{ color: "red" }}>{error}</p> : ""}
            </>
          </Form.Item>
        ) : (
          <InputBlur>
            <>
              <Form.Item<UserType>
                label={t("settings.new password")}
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  placeholder={t("settings.please enter your new password")}
                  value={password}
                  onChange={e => dispatch(setAddPassword(e.target.value))}
                />
              </Form.Item>

              <Form.Item<UserType>
                label={t("settings.again new password")}
                name="copyPasswordChange"
                rules={[]}
              >
                <Input.Password
                  placeholder={t("settings.please enter your password again")}
                  value={copyPasswordChange}
                  onChange={e =>
                    dispatch(setCopyPasswordChange(e.target.value))
                  }
                />
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ marginBottom: 10, marginTop: 20 }}
                >
                  {t("settings.change password")}
                </Button>
                {error ? <p style={{ color: "red" }}>{error}</p> : ""}
              </Form.Item>
            </>
          </InputBlur>
        )}
        
      </Form>
    </>
  )
}

export default ChangePassword
