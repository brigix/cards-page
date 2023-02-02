import rawText from "../json/Symbolon_LWB_78.json";

export const readFile = () => {
	const dataArr: any = [];
	rawText.forEach((entry) => dataArr.push(entry.data));

	const flattedArr = dataArr.flat(1);
	const mappedArr = flattedArr.map((f: any) => {
		if (f[0].text !== "") {
			return {
				title: f[0].text,
				id: f[1].text,
				keywords: f[2].text,
				meaning: f[3].text,
				problem: f[4].text,
				way: f[5].text,
				outcome: f[6].text
			};
		}
	});
//exportJson(mappedArr)
};

export const exportJson = (data: any) => {
	const element = document.createElement("a");
	const textFile = new Blob([JSON.stringify(data)], { type: "text/plain" });
	element.href = URL.createObjectURL(textFile);
	element.download = "symbolon_meanings.json";
	document.body.appendChild(element);
	element.click();
};
