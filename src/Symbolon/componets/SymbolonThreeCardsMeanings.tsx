import React from "react";
import SymbolonMeanings from "../../json/symbolon_meanings.json";
import { SymbolonMeaning } from "../../models/models";
import { Card, CardName, StyledSpan } from "../../styledComponents/components";

const SymbolonThreeCardsMeanings = ({
	threeCardsID,
}: {
	threeCardsID: {
		problemID: string | undefined;
		wayID: string | undefined;
		outcomeID: string | undefined;
	};
}) => {
	const symbolonMeanings: Array<SymbolonMeaning> = SymbolonMeanings;

	const problemCard: SymbolonMeaning | undefined = symbolonMeanings.find(
		(card: SymbolonMeaning) => card.id === threeCardsID.problemID
	);
	const wayCard: SymbolonMeaning | undefined = symbolonMeanings.find(
		(card: SymbolonMeaning) => card.id === threeCardsID.wayID
	);
	const outcomeCard: SymbolonMeaning | undefined = symbolonMeanings.find(
		(card: SymbolonMeaning) => card.id === threeCardsID.outcomeID
	);

	return (
		<Card>
			<CardName>{problemCard?.title}</CardName>
			<StyledSpan>PROBLEM: {problemCard?.problem}</StyledSpan>
			<CardName>{wayCard?.title}</CardName>
			<StyledSpan>WAY: {wayCard?.way}</StyledSpan>
			<CardName>{outcomeCard?.title}</CardName>
			<StyledSpan>OUTCOME: {outcomeCard?.outcome}</StyledSpan>
		</Card>
	);
};

export default SymbolonThreeCardsMeanings;
