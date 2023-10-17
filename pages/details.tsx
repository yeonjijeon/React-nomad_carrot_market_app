import type { NextPage } from 'next'

const Forms: NextPage = () => {
  return (
    <div className="flex flex-col space-y-2 p-5 ">
      <details className="open:text-white open:bg-indigo-400">
        <summary className="cursor-pointer">What is my fav. food.</summary>
        <span className="selection:bg-indigo-600 selection:text-white">
          김치
        </span>
      </details>
    </div>
  )
}

export default Forms
