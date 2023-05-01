import React from 'react'

interface Props {
  GetData: () => void
}

const Button = (props: Props) => {
  const {GetData}= props
  return (
    <div>
      <button onClick={GetData} className="
				bg-blue-800 
				hover:bg-blue-700 
				text-white 
				rounded 
				px-4 
				py-2
				">更新
				</button>   
    </div>
  )
}

export default Button
