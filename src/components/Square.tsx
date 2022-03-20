import {FC} from 'react'
type squervalue = {
    value:number
    click:(change:any)=>void
}
const Square:FC<squervalue> = ({value,click}) => {
  return (
     
  <div className="w-full grid cursor-pointer flex-[33%] active:bg-gray-300 border-black border-[1px] h-full place-items-center text-3xl font-semibold" onClick={()=>click(value)}>
{value}
  
  </div>
  )
}

export default Square
