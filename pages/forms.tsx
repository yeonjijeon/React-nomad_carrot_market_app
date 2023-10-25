import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Form() {
  const { register } = useForm()
  return (
    <form>
      <input
        {...register('username')}
        type="text"
        placeholder="Username"
        required
      />
      <input {...register('email')} type="email" placeholder="email" required />
      <input
        {...register('password')}
        type="password"
        placeholder="password"
        required
      />
      <input type="submit" value="Create Account" />
    </form>
  )
}
