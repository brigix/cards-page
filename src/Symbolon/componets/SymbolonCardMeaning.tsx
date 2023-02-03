import SymbolonMeanings from "../../json/symbolon_meanings.json";
import { SymbolonMeaning } from "../../models/models";

const SymbolonCardMeaning = ({ id }: { id: string }) => {
	const symbolonMeanings: Array<SymbolonMeaning> = SymbolonMeanings;

	const symbolonCard: SymbolonMeaning | undefined = symbolonMeanings.find(
		(card: SymbolonMeaning) => card.id === id
	);

	return (
		<div>
			<h4>{symbolonCard?.title}</h4>
			<p>{symbolonCard?.keywords}</p>
			<p>{symbolonCard?.meaning}</p>
			<p>PROBLEM: {symbolonCard?.problem}</p>
			<p>WAY: {symbolonCard?.way}</p>
			<p>OUTCOME: {symbolonCard?.outcome}</p>
		</div>
	);
};

export default SymbolonCardMeaning;
