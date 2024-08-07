export interface InitialSignIn {
  email: string
  password: string
  error: string
  isLoading: boolean
  isAuthorize: boolean
}

export type UserType = {
  email?: string
  password?: string
  copyPassword?: string
  remember?: string
}