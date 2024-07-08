import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction} from "@reduxjs/toolkit"
import type { InitialSignIn } from "./types"

const initialState: InitialSignIn = {
  email: "",
  password: "",
  error: "",
	isLoading: false,
	isAuthorize:false,
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
		setIsLoading(state, action: PayloadAction<boolean>){
			state.isLoading = action.payload
		},
		setIsAuthorize(state, action: PayloadAction<boolean>){
			state.isAuthorize = action.payload
		},
	},
})

export const {setAddEmail, setAddPassword, setAddError, setIsLoading, setIsAuthorize} = signInSlice.actions
export default signInSlice.reducer
