import type { RootState } from "../../redux/store";
export const selectSignIn = (state: RootState) => state.login;
export const selectSignInAuthorize = (state: RootState) => state.login.isAuthorize;