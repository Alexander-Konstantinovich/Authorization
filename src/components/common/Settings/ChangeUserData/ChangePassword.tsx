import { Form, Input } from "antd"
import Title from "antd/es/typography/Title"

const ChangePassword = () => {
	return (
		<>
		<Title style={{ textAlign: "left", margin: 15,paddingTop: 20, fontSize: 20}}>Change your password</Title>

		<Form
		name="basic"
		labelCol={{ span: 8 }}
		wrapperCol={{ span: 16 }}
		style={{ maxWidth: 600, marginTop: 40 }}
		initialValues={{ remember: true }}
		// onFinish={}
		autoComplete="off"
	>
		<Form.Item
			label="Password"
			name="password"
			rules={[{ required: true, message: "Please input your password!" }]}
		>
			<Input.Password
				placeholder="Please enter your password"
				// value={}
				// onChange={}
			/>
		</Form.Item>
		<Form.Item
          label="New password"
          name="new password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            placeholder="Please enter your new password"
            // value={password}
            // onChange={e => dispatch(setAddPassword(e.target.value))}
          />
        </Form.Item>

        <Form.Item
          label="Again new password"
          name="copyPassword"
          rules={[
            { required: true, message: "Please input your new password again!" },
          ]}
        >
          <Input.Password
            placeholder="Please enter your password again"
            // value={copyPassword}
            // onChange={e => dispatch(setAddCopyPassword(e.target.value))}
          />
        </Form.Item>
		</Form>
		</>
	)
}

export default ChangePassword