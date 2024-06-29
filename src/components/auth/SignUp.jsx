import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react"
import { auth } from "../../fairbase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copyPassword, setCopyPassword] = useState("");
	const [error, setError]= useState('')

  function register(e) {
    e.preventDefault()
		if(password !== copyPassword){
			setError('Passwords didn`t match')
			return
		}
		createUserWithEmailAndPassword(auth, email, password)
		.then(user=>{
			console.log(user)
			setError('')
			email('')
			password('')
			copyPassword('')
		}).catch(error=>console.log(error))
  }

  return (
    <div>
      <form>
        <h2>Create an account</h2>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
        />
        <input
          value={copyPassword}
          onChange={e => setCopyPassword(e.target.value)}
          type="password"
        />
        <button>Create</button>
      </form>
    </div>
  )
}

export default SignUp