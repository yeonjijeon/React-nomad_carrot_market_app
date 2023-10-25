import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

interface LoginForm {
  username: string
  password: string
  email: string
}

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: 'onBlur',
  })
  const onValid = (data: LoginForm) => {}

  const onInvalid = (errors: any) => {
    console.log(errors)
  }

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register('username', {
          required: 'Username is required',
          minLength: {
            message: 'The username should be longer than 5 chars.',
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register('email', {
          required: 'email is required',
          validate: {
            notGmail: (value) =>
              !value.includes('@gmail.com') ? '' : 'Gmail is not allowed',
          },
        })}
        type="email"
        placeholder="email"
        className={`${Boolean(errors.email)}` ? 'border-red-300' : ''}
      />
      {errors.email?.message}
      <input
        {...register('password', {
          required: 'password is required',
        })}
        type="password"
        placeholder="password"
      />
      <input type="submit" value="Create Account" />
    </form>
  )
}
