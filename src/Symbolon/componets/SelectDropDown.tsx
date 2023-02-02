import { SymbolonKey } from "../../models/models";
import { StyledSelect } from "../../styledComponents/components";

interface Props {
	options: Array<{ value: string; label: string }>;
}

const SelectDropDown = ({
	cards,
	selectCard,
	selectedCard,
}: {
	cards: Array<SymbolonKey>;
	selectCard: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	selectedCard: SymbolonKey | undefined;
}) => {
	const options = cards.map((card) => {
		return { value: card.id, label: `${card.zodiac_1} ${card.zodiac_2}` };
	});

	return (
		<StyledSelect onChange={selectCard} value={selectedCard?.id}>
			{options.map(({ value, label }) => (
				<option key={value} value={value}>
					{label}
				</option>
			))}
		</StyledSelect>
	);
};

export default SelectDropDown;
