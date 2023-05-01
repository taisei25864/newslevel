import React from 'react'

interface DataInfo {
	"title": string,
	"a": string
}

interface Props {
	GetContent: (index: number) => void
	data: DataInfo[] | undefined
  }

const Data  = (props: Props) => {
	const {GetContent, data} = props
	return (
		<div>
			{data ? 
			<div>
				{data.map((value: DataInfo, index: number) => {
					return (
						<>
							<div className="
								container
								border
								border-black-200
								hover:bg-orange-400
								px-4
								py-2
								rounded-lg
								shadow-lg
								cursor-pointer
							">
								<div onClick={() => GetContent(index)}>{value.title}</div>
							</div>
						</>
					)
				})}
			</div>
			: <div className="text-center">
				<p>更新ボタンを押してください</p>
			</div>}
		</div>
	);
}

export default Data
