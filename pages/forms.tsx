import type { NextPage } from 'next'

const Forms: NextPage = () => {
  return (
    <form className="flex flex-col space-y-2 bg-blue-500 p-5 ">
      <input
        type="text"
        required
        placeholder="Username"
        className="required:border-2 border-yellow-500 invalid:bg-red-500
        valid:bg-teal-500"
      />
      <input type="password" required placeholder="Password" />
      <input type="submit" value="Login" className="bg-white" />
    </form>
  )
}

export default Forms
