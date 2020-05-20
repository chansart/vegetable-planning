import React from 'react';

const SearchBox = ({ placeholder, searchChange, id }) => {
	return (
		<div className='pa3 dib w-25'>
			<input 
				type='search' 
				id={ id }
				placeholder={ placeholder } 
				className='br2 pa3 bg-light-gray w-90' 
				onChange={ searchChange }
			/>
		</div>
	);
}

export default SearchBox;