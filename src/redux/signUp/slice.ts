import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction} from "@reduxjs/toolkit"
import type { InitialSignUp } from "./types"

const initialState: InitialSignUp = {
  email: "",
  password: "",
  copyPassword: "",
	passwordCheck: "",
	updatePassword: "",
  error: "",
	isLoading: false,
}

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
		setAddEmail(state, action: PayloadAction<string>){
			state.email = action.payload
		},
    setAddPassword(state, action: PayloadAction<string>){
			state.password = action.payload
		},
    setAddCopyPassword(state, action: PayloadAction<string>){
			state.copyPassword = action.payload
		},
    setAddError(state, action: PayloadAction<string>){
			state.error = action.payload
		},
		setIsLoading(state, action: PayloadAction<boolean>){
			state.isLoading = action.payload
		},
		setPasswordCheck(state, action: PayloadAction<string>){
			state.passwordCheck = action.payload
		},
		setUpdatePassword(state, action: PayloadAction<string>){
			state.updatePassword = action.payload
			state.updatePassword = state.password
		},
	},
})

export const {setAddEmail, setAddPassword, setAddError, setAddCopyPassword, setIsLoading, setUpdatePassword, setPasswordCheck} = signUpSlice.actions
export default signUpSlice.reducer
