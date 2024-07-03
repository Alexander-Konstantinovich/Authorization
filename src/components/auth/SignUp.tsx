import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "../../fairbase"
import type { FormProps } from "antd"
import { Button, Form, Input } from "antd"

type UserType = {
  email?: string
  password?: string
  copyPassword?: string
  remember?: string
}

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [copyPassword, setCopyPassword] = useState("")
  const [error, setError] = useState("")

  function register() {
    if (password !== copyPassword) {
      setError("Passwords didn`t match")
      return
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(user => {
        console.log(user)
        setError("")
        setEmail("")
        setPassword("")
        setCopyPassword("")
      })
      .catch(error => console.log(error))
  }

  return (
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
        rules={[{ required: true, message: "Please input your username!" }]}
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

      <Form.Item<UserType>
        label="Again password"
        name="copyPassword"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          placeholder="Please enter your password again"
          value={copyPassword}
          onChange={e => setCopyPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default SignUp




{
  /* <form
      onSubmit={register}>
        <h2>Create an account</h2>
        <input
          placeholder="Please enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
        />
        <input
          placeholder="Please enter your password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
        />
        <input
          placeholder="Please enter your password again"
          value={copyPassword}
          onChange={e => setCopyPassword(e.target.value)}
          type="password"
        />
        <button>Create</button>
        {error ? <p style={{color: 'red'}}>{error}</p>:''}
      </form> */
}
