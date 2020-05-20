import React from 'react';

const Vegetable = ({ name, sow, harvest }) => {
	return (
		<div className='bg-light-red dib br2 pa3 ma3 grow bw2 shadow-2 tc ttc'>
				<img alt='' src={require(`../assets/${ name }.jpeg`)} />
				<h2>{ name }</h2>
				<p><strong>Sow: </strong>{ sow.join(', ') }</p>
				<p><strong>Harvest: </strong>{ harvest.join(', ') }</p>
		</div>
	);
}

export default Vegetable;