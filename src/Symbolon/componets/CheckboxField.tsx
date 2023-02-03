import React from "react";
import Checkbox from "./Checkbox";

const CheckboxField = () => {
	return (
		<fieldset>
			<legend>Choose card's meaning:</legend>
			<div>
				<Checkbox name="Problem" />
				<Checkbox name="Way trough problem" />
				<Checkbox name="Outcome" />
			</div>
		</fieldset>
	);
};

export default CheckboxField;
