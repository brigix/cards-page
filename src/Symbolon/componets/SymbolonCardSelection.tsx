import React, { useState } from "react";
import symbolonKeys from "../../json/Symbolon-planets-zodiac.json";
import { SymbolonKey } from "../../models/models";
import CheckboxField from "./CheckboxField";
import SelectDropDown from "./SelectDropDown";
import SymbolonCardMeaning from "./SymbolonCardMeaning";

const SymbolonCardSelection = () => {
	const [selectedCard, setSelectedCard] = useState<SymbolonKey | undefined>(
		undefined
	);
	const [selectedCardID, setSelectedCardID] = useState<string>("");

	const symbolonKeysConverted = symbolonKeys.map((s) => {
		return { ...s, id: s.id.toString() };
	});

	const selectCard = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const id = event.target.value;
		setSelectedCardID(id);
	};

	return (
		<div>
			<CheckboxField />
			<SelectDropDown
				selectCard={selectCard}
				cards={symbolonKeysConverted}
				selectedCard={selectedCard}
			/>
			<SymbolonCardMeaning id={selectedCardID} />
		</div>
	);
};

export default SymbolonCardSelection;
