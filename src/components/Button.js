import React from 'react';

const Button = ({ value }) => {
	const getStyleName = (btn) => {
		const className = {
			'=': 'equals',
			x: 'opt',
			'-': 'opt',
			'+': 'opt',
			'/': 'opt',
		};

		return className[btn];
	};

	return <button className={`${getStyleName(value)} button`}>{value}</button>;
};

export default Button;
