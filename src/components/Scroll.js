import React from 'react';

const Scroll = (props) => {
	return (
		<div className='ba overflow-y-scroll vh-75'>
			{ props.children }
		</div>
	);
}

export default Scroll;