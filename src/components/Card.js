import React from 'react';

const Card = ({ id, name, email, imeKompanije }) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			{/* Slike sa internet API
			<img alt='robots' src={`https://robohash.org/${id}?200x200`} /> */}
			{/* Slike iz lokalnog foldera */}
			<img alt='robots' src={`./proba1/slike/${id}.jpg`} />
			<h2>{name}</h2>
			<p>{email}</p>
			<p>{imeKompanije}</p>
		</div>
	);
}

export default Card;