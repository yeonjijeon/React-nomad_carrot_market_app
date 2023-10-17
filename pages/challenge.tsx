import type { NextPage } from 'next'

const Challenge: NextPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-orange-500 ">
      <div className="bg-white px-5 pt-14 pb-5 rounded-xl ">
        <div className="flex flex-col">
          <div className="flex space-x-1 pb-2">
            <span className="font-light">March 2021</span>
            <div className="w-6">
              <svg
                fill="none"
                stroke="gray"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                ></path>
              </svg>
            </div>
          </div>
          <div className="justify-between border-t-2" />

          <div className="flex flex-col items-center justify-center p-6">
            <span className="font-medium text-center">
              Hello, Bruno!<br></br>Your medicines for today
            </span>
          </div>

          <div className="flex space-x-7 px-2 pb-20 items-center justify-center">
            <div className="flex flex-col space-y-2 items-center justify-center">
              <span className="text-xl font-medium">16</span>
              <span className="text-xs">Mon</span>
            </div>
            <div className="flex flex-col space-y-2 items-center justify-center">
              <span className="text-xl font-medium">17</span>
              <span className="text-xs">Tue</span>
            </div>
            <div
              className="flex flex-col space-y-2 items-center justify-center 
          bg-[hsl(202,81%,60%)] rounded-xl border-x-4 border-y-4 border-[hsl(202,81%,60%)] "
            >
              <span className="text-xl font-medium">18</span>
              <span className="text-xs">Wed</span>
            </div>
            <div className="flex flex-col space-y-2 items-center justify-center">
              <span className="text-xl font-medium">19</span>
              <span className="text-xs">Thu</span>
            </div>
            <div className="flex flex-col space-y-2 items-center justify-center">
              <span className="text-xl font-medium">20</span>
              <span className="text-xs">Fri</span>
            </div>
            <div className="flex flex-col space-y-2 items-center justify-center">
              <span className="text-xl font-medium">21</span>
              <span className="text-xs">Sat</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 sm:grid sm:grid-cols-2 sm:space-x-4 lg:bg-black">
          <div className="bg-sky-500 rounded-lg overflow-hidden">
            <div className="bg-yellow-200 rounded-lg relative w-4/5 h-full p-3 ">
              <div className="flex flex-col pb-28">
                <span className="text-xl">Nora - BE</span>
                <span className="text-xs">Norenthindrone - 0.35mg</span>
              </div>
              <span className="text-sm">7H 30AM</span>
            </div>
            <div className="flex justify-end">
              <div className="w-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-green-200 rounded-lg">
            <div className="flex flex-col pb-28 p-3">
              <span className="text-xl">Feosol</span>
              <span className="text-xs">Ferrous Sulfate - 600mg</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Challenge
