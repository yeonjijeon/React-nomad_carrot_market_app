import type { NextPage } from 'next'

const Live: NextPage = () => {
  return (
    <div className="py-10 divide-y-2 space-y-4">
      {new Array(4).fill(1).map((_, i) => (
        <div className="pt-4 px-4" key={i}>
          <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
          <h3 className="text-gray-700 text-lg mt-2">Let's try potatos</h3>
        </div>
      ))}
      <button className="fixed hover:bg-orange-500 cursor-pointer transition-colors bottom-24 right-5 bg-orange-400 rounded-full shadow-xl p-4 border-transparent text-white">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
          ></path>
        </svg>
      </button>
    </div>
  )
}

export default Live
