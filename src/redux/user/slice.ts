import { createSlice } from "@reduxjs/toolkit"

interface InitialUser {
  email: string
  password: string
  copyPassword: string
}

const initialState: InitialUser = {
  email: "",
  password: "",
  copyPassword: "",
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
		setAddUser(state, action){
			
		}
	},
})
