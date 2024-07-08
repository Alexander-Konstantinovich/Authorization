import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction} from "@reduxjs/toolkit"
import type { InitialSignUp } from "./types"

const initialState: InitialSignUp = {
  email: "",
  password: "",
  copyPassword: "",
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
	},
})

export const {setAddEmail, setAddPassword, setAddError, setAddCopyPassword, setIsLoading} = signUpSlice.actions
export default signUpSlice.reducer
