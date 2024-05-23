import { IoFilterOutline } from 'react-icons/io5'

export default function SortButton({handleFilterOptionClick}:any) {

  return (
    <div className="relative group">
    <div className="flex border-2 h-12 items-center px-2 border-blue-500 bg-blue-500 text-white gap-2 rounded-md cursor-pointer group">
      <span>Sort</span> <IoFilterOutline />
    </div>
    <div className="absolute z-20 top-12 right-0 hidden group-hover:block bg-white border border-gray-200 rounded-md py-1 w-max">
      <div
        className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
        onClick={() => handleFilterOptionClick("a-z")}
      >
        A-Z
      </div>
      <div
        className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
        onClick={() => handleFilterOptionClick("reset")}
      >
        Reset
      </div>
    </div>
  </div>
  )
}
