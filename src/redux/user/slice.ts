import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction} from "@reduxjs/toolkit"
import type { InitialUser } from "./types"

const initialState: InitialUser = {
  email: "",
  password: "",
  copyPassword: "",
  error: "",
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
		setAddEmail(state, action: PayloadAction<string>){
			state.email = action.payload
		},
    setAddPassword(state, action: PayloadAction<string>){
			state.password = action.payload
		},
    setAddCopyPassword(state, action: PayloadAction<string>){
			state.password = action.payload
		},
    setAddError(state, action: PayloadAction<string>){
			state.error = action.payload
		},
	},
})

export const {setAddEmail, setAddPassword, setAddError, setAddCopyPassword} = userSlice.actions
export default userSlice.reducer
