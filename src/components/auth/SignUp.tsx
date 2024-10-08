import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../fairbase"
import { Button, Form, Input, Spin } from "antd"
import { useAppSelector, useAppDispatch } from "../../redux/hooks"
import {
  setAddEmail,
  setAddError,
  setAddPassword,
  setAddCopyPassword,
  setIsLoading,
} from "../../redux/signUp/slice"
import { selectSignUp } from "../../redux/signUp/selectors"
import { DivButton, DivForm } from "./styles/userStyles"
import { useNavigate } from "react-router-dom"
import type { UserType } from "../../redux/signIn/types"


const SignUp = () => {
  const navigate = useNavigate()
  const { email, password, error, copyPassword, isLoading } =
    useAppSelector(selectSignUp)
  const dispatch = useAppDispatch()

  function register() {
    dispatch(setIsLoading(true))
    if (password !== copyPassword) {
      dispatch(setAddError("Passwords didn`t match"))
      return
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(user => {
        console.log(user)
        dispatch(setAddError(""))
        dispatch(setAddEmail(""))
        dispatch(setAddPassword(""))
        dispatch(setAddCopyPassword(""))
        navigate("/login")
        dispatch(setIsLoading(false))
      })
      .catch(error => console.log(error.message))
  }

  return (
    <DivForm>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={register}
        onFinishFailed={register}
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

        <Form.Item<UserType>
          label="Again password"
          name="copyPassword"
          rules={[
            { required: true, message: "Please input your password again!" },
          ]}
        >
          <Input.Password
            placeholder="Please enter your password again"
            value={copyPassword}
            onChange={e => dispatch(setAddCopyPassword(e.target.value))}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <DivButton>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            {isLoading && <Spin style={{ marginTop: 15 }} />}
          </DivButton>
          {error ? <p style={{ color: "red" }}>{error}</p> : ""}
        </Form.Item>
      </Form>
    </DivForm>
  )
}

export default SignUp
