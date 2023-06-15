import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { userLogin } from "../store/actions/actionCreator"

export default function LoginPage() {
  const navigate = useNavigate()
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  })
  const handleLogin = (event) => {
    const { name, value } = event.target

    setLoginForm({
      ...loginForm,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await userLogin(loginForm)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Welcome!',
        showConfirmButton: false,
        timer: 1500
      })
      await navigate('/')
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.message
      })
    }
  }
  return <div className="flex justify-center items-center w-full p-20">
    <div className="flex flex-col gap-y-5 w-96 border-solid border-2 p-10">
      <h1 className="font-bold text-2xl text-center">Log in to your account</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input value={loginForm.email} name="email" onChange={handleLogin} type="text" placeholder="tejo@mail.com" className="input input-bordered w-full" />
        </div>
        <div className="flex flex-col">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input value={loginForm.password} name="password" onChange={handleLogin} type="password" placeholder="*****" className="input input-bordered w-full" />
        </div>
        <button className="btn w-full mt-4">Login</button>
      </form>
    </div>
  </div >
}