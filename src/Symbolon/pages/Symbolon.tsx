import React, { useState } from "react";
import {
	ToggleButton,
	Header,
	NavBar,
	PageContainer,
} from "../../styledComponents/components";
import OneCardSelection from "../componets/OneCardSelection";
import ThreeCardsSelection from "../componets/ThreeCardsSelection";

const Symbolon = () => {
	const [cardDraw, setCardDraw] = useState<{
		oneCard: boolean;
		threeCards: boolean;
	}>({ oneCard: false, threeCards: false });

	const selectOneDraw = () => {
		setCardDraw({ oneCard: true, threeCards: false });
	};
	const selectThreeDraw = () => {
		setCardDraw({ oneCard: false, threeCards: true });
	};
	return (
		<PageContainer>
			<Header>Symbolon</Header>
			<NavBar>
				<ToggleButton onClick={selectOneDraw} isSelected={cardDraw.oneCard}>
					One card draw
				</ToggleButton>
				<ToggleButton
					onClick={selectThreeDraw}
					isSelected={cardDraw.threeCards}
				>
					Three cards draw
				</ToggleButton>
			</NavBar>
			{cardDraw.oneCard && <OneCardSelection />}
			{cardDraw.threeCards && <ThreeCardsSelection />}
		</PageContainer>
	);
};

export default Symbolon;
