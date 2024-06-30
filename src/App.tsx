import "./App.css"
import AuthDetails from "./components/auth/AuthDetails"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"


const App = () => {
  return <div>
    <SignUp />
    <SignIn />
    <AuthDetails />
  </div>
}
export default App
