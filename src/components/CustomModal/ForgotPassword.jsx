import React, { useState } from 'react'
import axios from 'axios'
// import { Form, Button, Alert, Container, Row, Col } from 'bootstrap'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    setError('')

    try {
      const response = await axios.post(
        'https://your-backend-api.com/forgot-password',
        { email }
      )
      setMessage(response.data.message)
    } catch (error) {
      setError(
        error.response ? error.response.data.message : 'An error occurred'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='justify-content-md-center relative max-w-6xl mx-auto mt-40'>
      <div md={6} className='flex flex-col gap-10'>
        <h2 className='my-4'>Forgot Password</h2>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-10 items-center justify-center'
        >
          <div controlId='formBasicEmail'>
            <label className=' mr-4'>Email address</label>
            {/* <input
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            /> */}
            <input
              type='email'
              className='p-3 border rounded-sm w-[200px]'
              placeholder='Enter email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <button class='px-4 py-2 bg-blue-500 text-white border-none rounded cursor-pointer hover:bg-blue-700'>
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>
        {message && (
          <div variant='success' className='mt-3'>
            {message}
          </div>
        )}
        {error && (
          <div variant='danger' className='mt-3'>
            {error}
          </div>
        )}
      </div>
    </div>
  )
}

export default ForgotPassword
