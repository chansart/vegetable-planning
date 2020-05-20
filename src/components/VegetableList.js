import React from 'react';
import Vegetable from './Vegetable';

const VegetableList = ( { vegetables } ) => {

	const vegetableComponent = vegetables.map((vegetable, i) => {
		return (
			<Vegetable
				key={ i }
				name={ vegetable.name }
				sow={ vegetable.sow }
				harvest={ vegetable.harvest }
			/>
		);
	})

	return (
		<div>
			{ vegetableComponent }
		</div>
	);
}

export default VegetableList;