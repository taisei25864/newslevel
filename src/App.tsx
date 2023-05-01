import React from "react";
import axios from "axios";
import 'tailwindcss/tailwind.css'
import Data from "./component/Data"
import Button from "./component/Button"
import { useState } from 'react'

function App() {
	interface DataInfo {
		"title": string,
		"a": string
	}
	
	const [data, setData] = useState<DataInfo[] | undefined>();
	const url = "http://127.0.0.1:8000";

	function GetContent(index: number): void {
		if(data) {
			const url: string = data[index].a
			window.location.href = url
		}
		else {
			console.log("データが取れていません")
		}
	}

	function GetData(): void {
		axios.get(url).then((res) => {
			setData(res.data);
			console.log("正しく動作しています")
		});
	};

	return (
		<div className="flex flex-row">
			<div className="w-1/2">
				<Data 			
					GetContent={GetContent}
					data={data}
				/>
			</div>
			<div className="w-1/2">
				<Button 
					GetData={GetData}
				/>
			</div>
		</div>
	)
}

export default App;