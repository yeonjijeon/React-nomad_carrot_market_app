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

      <ul className="list-disc marker:text-teal-500">
        <li>hi</li>
        <li>hi</li>
        <li>hi</li>
        <input
          type="file"
          className="file:cursor-pointer 
          file:hover:text-purple-400 file:hover:bg-white file:hover:border-purple-400 file:hover:border file:transition-colors file:border-0 file:rounded-xl file:px-5 file:text-white file:bg-purple-400"
        />
        <p className="first-letter:text-2xl first-letter:hover:text-purple-400">
          test
        </p>
      </ul>
    </div>
  )
}

export default Forms
