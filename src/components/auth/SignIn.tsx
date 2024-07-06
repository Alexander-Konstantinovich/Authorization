import React from "react"

import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../fairbase"
import { Button, Form, Input, Spin } from "antd"

import { useAppSelector, useAppDispatch } from "../../app/hooks"
import {
  setAddEmail,
  setAddError,
  setAddPassword,
} from "../../redux/signIn/slice"
import { selectSignIn } from "../../redux/signIn/selectors"
import { DivButton, DivForm } from "./styles/userStyles"
import { Link } from "react-router-dom"

type UserType = {
  email?: string
  password?: string
  copyPassword?: string
  remember?: string
}

const SignIn = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const { email, password, error } = useAppSelector(selectSignIn)
  const dispatch = useAppDispatch()

  function logIn() {
    if (isLoading) {
      setIsLoading(false)
      signInWithEmailAndPassword(auth, email, password)
        .then(user => {
          console.log(user)
          dispatch(setAddError(""))
          dispatch(setAddEmail(""))
          dispatch(setAddPassword(""))
          setIsLoading(true)
        })
        .catch(error => console.log(error.message))
      dispatch(setAddError("Sorry, couldn`t find your account"))
    }
  }

  return (
    <DivForm>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, marginTop: 40 }}
        initialValues={{ remember: true }}
        onFinish={logIn}
        autoComplete="off"
      >
        <Form.Item<UserType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            placeholder="Please enter your email"
            value={email}
            onChange={e => dispatch(setAddEmail(e.target.value))}
          />
        </Form.Item>

        <Form.Item<UserType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            placeholder="Please enter your password"
            value={password}
            onChange={e => dispatch(setAddPassword(e.target.value))}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <DivButton>
            <Button
              type="primary"
              htmlType="submit"
              onClick={logIn}
              style={{ marginBottom: 20 }}
            >
              Submit
            </Button>
            {isLoading || <Spin style={{ marginBottom: 15 }} />}
            <Link to="/registration" style={{ margin: "auto" }}>
              <Button type="default" htmlType="button">
                Authorization
              </Button>
            </Link>
          </DivButton>
          {error ? <p style={{ color: "red" }}>{error}</p> : ""}
        </Form.Item>
      </Form>
    </DivForm>
  )
}

export default SignIn
