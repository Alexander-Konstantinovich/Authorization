import { Button, Form, Input } from "antd"
import { auth } from "../../../../fairbase"
import Title from "antd/es/typography/Title"
import { InputBlur } from "../styles/settingsStyles"
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks"
import { setAddError } from "../../../../redux/signIn/slice"
import { selectSignUp } from "../../../../redux/signUp/selectors"
import {
  setAddCopyPassword,
  setAddPassword,
  setPasswordCheck,
  setUpdatePassword,
} from "../../../../redux/signUp/slice"
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth"
import type { UserType } from "../../../../redux/signIn/types"
import { useState } from "react"

const ChangePassword = () => {
  const dispatch = useAppDispatch()
  const { password, error, isLoading, copyPassword, passwordCheck } =
    useAppSelector(selectSignUp)

  const [isOldPasswordVerified, setIsOldPasswordVerified] = useState(false)

  const verifyOldPassword = () => {
    const user = auth.currentUser
    if (user && user.email) {
      const credential = EmailAuthProvider.credential(user.email, passwordCheck)

      reauthenticateWithCredential(user, credential)
        .then(() => {
          setIsOldPasswordVerified(true)
          dispatch(setAddError(""))
        })
        .catch(error => {
          console.log(error.message)
          dispatch(setAddError("Неверный старый пароль"))
        })
    } else {
      console.error("Не удалось получить информацию о пользователе.")
    }
  }

  function update() {
    if (password !== copyPassword) {
      dispatch(setAddError("Пароли не совпадают"))
      return
    }

    const user = auth.currentUser
    if (user) {
      updatePassword(user, password)
        .then(() => {
          console.log("Пароль успешно обновлён")
          dispatch(setUpdatePassword(password))
        })
        .catch(error => {
          console.log(error.message)
        })
    } else {
      console.error("Не удалось получить информацию о пользователе.")
    }
  }

  return (
    <>
      <Title
        style={{ textAlign: "left", margin: 15, paddingTop: 20, fontSize: 20 }}
      >
        Change your password
      </Title>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, marginTop: 40 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        {!isOldPasswordVerified ? (
          <Form.Item<UserType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "passwords don't match!" }]}
          >
            <Input.Password
              placeholder="Please enter your password"
              value={passwordCheck}
              onChange={e => dispatch(setPasswordCheck(e.target.value))}
            />
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginBottom: 10, marginTop: 20 }}
              onClick={verifyOldPassword}
            >
              Check
            </Button>
          </Form.Item>
        ) : (
          <InputBlur>
            <Form.Item<UserType>
              label="New password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                placeholder="Please enter your new password"
                value={password}
                onChange={e => dispatch(setAddPassword(e.target.value))}
              />
            </Form.Item>

            <Form.Item<UserType>
              label="Again new password"
              name="copyPassword"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.Password
                placeholder="Please enter your password again"
                value={copyPassword}
                onChange={e => dispatch(setAddCopyPassword(e.target.value))}
              />
              <Button
                type="primary"
                htmlType="submit"
                onClick={update}
                style={{ marginBottom: 10, marginTop: 20 }}
              >
                ChangePassword
              </Button>
            </Form.Item>
          </InputBlur>
        )}
      </Form>
    </>
  )
}

export default ChangePassword
