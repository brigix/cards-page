import React, { useState } from "react";
import symbolonKeys from "../../json/Symbolon-planets-zodiac.json";
import { SymbolonKey } from "../../models/models";
import {
	ResponsiveContainer,
	SelectWrap,
} from "../../styledComponents/components";
import CheckboxField from "./CheckboxField";
import SelectDropDown from "./SelectDropDown";
import SymbolonCardMeaning from "./SymbolonCardMeaning";

const OneCardSelection = () => {
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
		<>
			<ResponsiveContainer>
				<SelectWrap>
					<SelectDropDown
						selectCard={selectCard}
						cards={symbolonKeysConverted}
						selectedCard={selectedCard}
					/>
				</SelectWrap>
			</ResponsiveContainer>
			{!!selectedCardID && <SymbolonCardMeaning id={selectedCardID} />}
		</>
	);
};

export default OneCardSelection;
