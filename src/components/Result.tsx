import {FC} from 'React'
type result={
    results:string
}
const result:FC <result> = ({results}) => {
  return (
  <h3 className='text-center text-2xl text-red-500'>{results}</h3>
  )
}

export default result
