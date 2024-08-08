import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction} from "@reduxjs/toolkit"
import type { InitialChangePassword } from "./types"

const initialState: InitialChangePassword = {
  passwordCheck: "",
	copyPassword: "",
	updatePassword: "",
  error: "",
	isLoading: false,
}

const ChangePasswordSlice = createSlice({
  name: "changePassword",
  initialState,
  reducers: {
    setAddPassword(state, action: PayloadAction<string>){
			state.passwordCheck = action.payload
		},
		setAddCopyPassword(state, action: PayloadAction<string>){
			state.copyPassword = action.payload
		},
		setUpdatePassword(state, action: PayloadAction<string>){
			state.updatePassword = action.payload
		},
    setAddError(state, action: PayloadAction<string>){
			state.error = action.payload
		},
		setIsLoading(state, action: PayloadAction<boolean>){
			state.isLoading = action.payload
		},
	},
})

export const { setAddPassword, setAddError, setIsLoading, setUpdatePassword} = ChangePasswordSlice.actions
export default ChangePasswordSlice.reducer