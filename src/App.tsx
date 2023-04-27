import React from "react";
import axios from "axios";

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
			<div>ここに処理を書いていきます</div>
			{data ? 
			<div>
				{data.map((value: Data, index: number) => {
					return (
						<>
							<div>
								<div onClick={() => GetContent(index)}>{value.title}</div>
								<div>{value.a}</div>
							</div>
						</>
					)
				})}
			</div>
			: <button onClick={GetData}>データを取得</button>}
		</div>
	);
}

export default App;