import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../fairbase"
import { Button, Form, Input } from "antd"

import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { setAddEmail, setAddError, setAddPassword } from "../../redux/user/slice";
import { selectUser } from "../../redux/user/selectors";

type UserType = {
  email?: string
  password?: string
  copyPassword?: string
  remember?: string
}

const SignIn = () => {

  const {email, password, error} = useAppSelector(selectUser)
  const dispatch = useAppDispatch();

  function logIn() {
    signInWithEmailAndPassword(auth, email, password)
      .then(user => {
        console.log(user)
        setAddError("")
        setAddEmail("")
        setAddPassword("")
      })
      .catch(error => (error.message));
			setAddError('Sorry, couldn`t find your account')
  }

  return (
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
        <Button type="primary" htmlType="submit" onClick={logIn}>
          Submit
        </Button>
        {error ? <p style={{color: 'red'}}>{error}</p>:''}
        </Form.Item>
      </Form>
  )
}

export default SignIn

