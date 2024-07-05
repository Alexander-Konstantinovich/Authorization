import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../fairbase"
import { Button, Form, Input } from "antd"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import {
  setAddEmail,
  setAddError,
  setAddPassword,
  setAddCopyPassword,
} from "../../redux/signUp/slice"
import { selectSignUp } from "../../redux/signUp/selectors"
import { DivForm } from "./styles/userStyles"

interface UserType {
  email?: string
  password?: string
  copyPassword?: string
  remember?: string
}

const SignUp = () => {
  const { email, password, error, copyPassword } = useAppSelector(selectSignUp)
  const dispatch = useAppDispatch()

  function register() {
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
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          {error ? <p style={{ color: "red" }}>{error}</p> : ""}
        </Form.Item>
      </Form>
    </DivForm>
  )
}

export default SignUp


