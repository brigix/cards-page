import SymbolonMeanings from "../../json/symbolon_meanings.json";
import { SymbolonMeaning } from "../../models/models";
import { Card, CardName, StyledSpan } from "../../styledComponents/components";

const SymbolonCardMeaning = ({ id }: { id: string}) => {
	const symbolonMeanings: Array<SymbolonMeaning> = SymbolonMeanings;

	const symbolonCard: SymbolonMeaning | undefined = symbolonMeanings.find(
		(card: SymbolonMeaning) => card.id === id
	);

	return (
		<Card>
			<CardName>{symbolonCard?.title}</CardName>
			<StyledSpan>{symbolonCard?.keywords}</StyledSpan>
			<StyledSpan>{symbolonCard?.meaning}</StyledSpan>
			<StyledSpan>PROBLEM: {symbolonCard?.problem}</StyledSpan>
			<StyledSpan>WAY: {symbolonCard?.way}</StyledSpan>
			<StyledSpan>OUTCOME: {symbolonCard?.outcome}</StyledSpan>
		</Card>
	);
};

export default SymbolonCardMeaning;
