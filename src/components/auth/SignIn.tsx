import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "../../fairbase"

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  function logIn(e:any) {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then(user => {
        console.log(user)
        setError("")
        setEmail("")
        setPassword("")
      })
      .catch(error => console.log(error));
			setError('Sorry, couldn`t find your account')
  }

  return (
    <div>
      <form
      onSubmit={logIn}>
        <h2>Log in</h2>
        <input
          placeholder="Please enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
        />
        <input
          placeholder="Please enter your password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
        />

        <button onClick={logIn}>Login</button>
        {error ? <p style={{color: 'red'}}>{error}</p>:''}
      </form>
    </div>
  )
}

export default SignIn

