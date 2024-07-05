import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction} from "@reduxjs/toolkit"
import type { InitialSignIn } from "./types"

const initialState: InitialSignIn = {
  email: "",
  password: "",
  error: "",
}

const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
		setAddEmail(state, action: PayloadAction<string>){
			state.email = action.payload
		},
    setAddPassword(state, action: PayloadAction<string>){
			state.password = action.payload
		},
    setAddError(state, action: PayloadAction<string>){
			state.error = action.payload
		},
	},
})

export const {setAddEmail, setAddPassword, setAddError} = signInSlice.actions
export default signInSlice.reducer
