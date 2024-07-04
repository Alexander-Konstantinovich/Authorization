import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../fairbase"
import { Button, Form, Input } from "antd"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { setAddEmail, setAddError, setAddPassword, setAddCopyPassword } from "../../redux/user/slice";


interface UserType  {
  email?: string;
  password?: string;
  copyPassword?: string;
  remember?: string;
}

const SignUp = () => {
  const {email, password, error, copyPassword} = useAppSelector(state=>state.authorization)
  const dispatch = useAppDispatch();


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
      .catch(error => console.log(error))
  }


  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600, marginTop: 40 }}
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
          onChange={e => dispatch(setEmail(e.target.value))}
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
          onChange={e => setAddPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item<UserType>
        label="Again password"
        name="copyPassword"
        rules={[{ required: true, message: "Please input your password again!" }]}
      >
        <Input.Password
          placeholder="Please enter your password again"
          value={copyPassword}
          onChange={e => setAddCopyPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        {error ? <p style={{color: 'red'}}>{error}</p>:''}
      </Form.Item>
    </Form>
  )
}

export default SignUp

function setEmail(arg0: string): any {
  throw new Error("Function not implemented.");
}
