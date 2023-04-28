import React from "react";
import axios from "axios";
import 'tailwindcss/tailwind.css'

function App() {
	type Data = {
		"title": string,
		"a": string
	}
	const [data, setData] = React.useState<Data[]>();
	const url = "http://127.0.0.1:8000";

	const GetContent = (index: number) => {
		if(data) {
			const url: string = data[index].a
			window.location.href = url
		}
		else {
			console.log("データが取れていません")
		}
	}

	const GetData = () => {
		axios.get(url).then((res) => {
			setData(res.data);
		});
	};

	return (
		<div>
			{data ? 
			<div>
				{data.map((value: Data, index: number) => {
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
				<button onClick={GetData} className="
				bg-blue-800 
				hover:bg-blue-700 
				text-white 
				rounded 
				px-4 
				py-2
				">データを取得
				</button>
			</div>}
		</div>
	);
}

export default App;