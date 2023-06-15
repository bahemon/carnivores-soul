import { useState } from "react"
import Swal from "sweetalert2"
import { userRegister } from "../store/actions/actionCreator"

export default function RegisterPage() {
  const [registerForm, setRegisterForm] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    Address: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setRegisterForm({
      ...registerForm,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const res = await userRegister(registerForm)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Register for ${res.email} success`,
        showConfirmButton: false,
        timer: 1500
      })
      setRegisterForm({
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        Address: ''
      })
      // await navigate('/')
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.message
      })
    }
  }



  return <div className="w-full flex flex-col justify-center items-center p-3 my-5 gap-y-3">
    <div className="w-full">
      <h1 className="text-xl font-bold text-start">Register New Admin</h1>
    </div>

    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col">
        <label className="label">
          <span className="label-text">Username</span>
        </label>
        <input value={registerForm.username} onChange={handleChange} name="username" type="text" className="input input-bordered w-2/4" />
      </div>

      <div className="flex flex-col">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input value={registerForm.email} onChange={handleChange} name="email" type="text" className="input input-bordered w-2/4" />
      </div>

      <div className="flex flex-col">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input value={registerForm.password} onChange={handleChange} name="password" type="password" className="input input-bordered w-2/4" />
      </div>

      <div className="flex flex-col">
        <label className="label">
          <span className="label-text">Phone Number</span>
        </label>
        <input value={registerForm.phoneNumber} onChange={handleChange} name="phoneNumber" type="number" className="input input-bordered w-2/4" />
      </div>

      <div className="flex flex-col">
        <label className="label">
          <span className="label-text">Address</span>
        </label>
        <input value={registerForm.Address} onChange={handleChange} name="Address" type="text" className="input input-bordered w-2/4" />
      </div>

      <div className="flex">
        <button className="btn mt-4 bg-gray-800">Register</button>
      </div>
    </form>
  </div >
}