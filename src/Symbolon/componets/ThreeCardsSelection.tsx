import React, { useState } from "react";
import symbolonKeys from "../../json/Symbolon-planets-zodiac.json";
import { SymbolonKey } from "../../models/models";
import {
	ResponsiveContainer,
	SelectWrap,
} from "../../styledComponents/components";
import SelectDropDown from "./SelectDropDown";
import SymbolonCardMeaning from "./SymbolonCardMeaning";
import SymbolonThreeCardsMeanings from "./SymbolonThreeCardsMeanings";

const ThreeCardsSelection = () => {
	const [selectedCard, setSelectedCard] = useState<SymbolonKey | undefined>(
		undefined
	);
	const [selectedCardID, setSelectedCardID] = useState<string>("");
	const [problemID, setProblemID] = useState<string | undefined>();
	const [wayID, setWayID] = useState<string | undefined>();
	const [outcomeID, setOutcomeID] = useState<string | undefined>();

	const [threeCards, setThreeCards] = useState<{
		problemID: string | undefined;
		wayID: string | undefined;
		outcomeID: string | undefined;
	}>({
		problemID: undefined,
		wayID: undefined,
		outcomeID: undefined,
	});

	const symbolonKeysConverted = symbolonKeys.map((s) => {
		return { ...s, id: s.id.toString() };
	});

	const selectProblemCard = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const id = event.target.value;
		setThreeCards({ ...threeCards, problemID: id });
		setProblemID(id);
	};

	const selectWayCard = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const id = event.target.value;
		setThreeCards({ ...threeCards, wayID: id });

		setWayID(id);
	};

	const selectOutcomeCard = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const id = event.target.value;
		setThreeCards({ ...threeCards, outcomeID: id });
		setOutcomeID(id);
	};

	return (
		<>
			<ResponsiveContainer>
				<SelectWrap>
					{" "}
					Problem:{" "}
					<SelectDropDown
						selectCard={selectProblemCard}
						cards={symbolonKeysConverted}
						selectedCard={selectedCard}
					/>
				</SelectWrap>
				<SelectWrap>
					{" "}
					Way through:{" "}
					<SelectDropDown
						selectCard={selectWayCard}
						cards={symbolonKeysConverted}
						selectedCard={selectedCard}
					/>
				</SelectWrap>
				<SelectWrap>
					{" "}
					Outcome:{" "}
					<SelectDropDown
						selectCard={selectOutcomeCard}
						cards={symbolonKeysConverted}
						selectedCard={selectedCard}
					/>
				</SelectWrap>
			</ResponsiveContainer>
			{(!!threeCards.problemID ||
				!!threeCards.wayID ||
				!!threeCards.outcomeID) && (
				<SymbolonThreeCardsMeanings threeCardsID={threeCards} />
			)}
		</>
	);
};

export default ThreeCardsSelection;
