import type { NextPage } from 'next'

const Chats: NextPage = () => {
  return (
    <div className="py-10 divide-y-[1px]">
      {new Array(7).fill(1).map((_, i) => (
        <div className="flex px-4 cursor-pointer py-3 items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-slate-300" />
          <div>
            <p className="text-gray-700">Steve Jebs</p>
            <p className="text-sm font-medium text-gray-500">
              See you tommorow in the corner at 2pm!
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Chats
