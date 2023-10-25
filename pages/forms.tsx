import React, { useState } from 'react'

export default function Form() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formErrors, setFormErrors] = useState('')

  const onUsernameChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event
    setUsername(value)
  }

  const onEmailChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event
    setEmail(value)
  }

  const onPasswordChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event
    setPassword(value)
  }

  const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault
    if (username === '' || email === '' || password === '') {
      setFormErrors('All feilds are required')
    }
    if (email.includes('@')) {
      setFormErrors('')
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        value={username}
        onChange={onUsernameChange}
        type="text"
        placeholder="Username"
        required
        minLength={5}
      />
      <input
        value={email}
        onChange={onEmailChange}
        type="email"
        placeholder="email"
        required
      />
      <input
        value={password}
        onChange={onPasswordChange}
        type="password"
        placeholder="password"
        required
      />
      <input type="submit" value="Create Account" />
    </form>
  )
}
