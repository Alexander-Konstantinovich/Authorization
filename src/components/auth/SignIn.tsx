import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "../../fairbase"
import { Button, Form, Input, message } from "antd"

type UserType = {
  email?: string
  password?: string
  copyPassword?: string
  remember?: string
}

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  function logIn(e:any) {
    signInWithEmailAndPassword(auth, email, password)
      .then(user => {
        console.log(user)
        setError("")
        setEmail("")
        setPassword("")
      })
      .catch(error => (error.message));
			setError('Sorry, couldn`t find your account')
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={logIn}
      onFinishFailed={logIn}
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
          onChange={e => setEmail(e.target.value)}
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
          onChange={e => setPassword(e.target.value)}
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

