import React, { useState } from "react";

const Checkbox = ({ name }: { name: string }) => {
	const [checked, setChecked] = useState<boolean>(false);

	const handleChange = () => {
		setChecked(!checked);
	};
	return (
		<>
			<input
				type="checkbox"
				id={name}
				name={name}
				key={name}
				value={name.split(" ")[0]}
				onChange={handleChange}
			/>
			<label htmlFor={name}>{name}</label>
		</>
	);
};

export default Checkbox;
