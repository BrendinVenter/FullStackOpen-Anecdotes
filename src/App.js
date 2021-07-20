import './styles.css';
import React, { useState } from 'react';

const Button = ({ handleClick, text }) => {
	return <button onClick={handleClick}>{text}</button>;
};

const Display = ({ text }) => {
	return (
		<div>
			<p>{text}</p>
		</div>
	);
};

const DisplayTopAnecdote = ({ titleText, text }) => {
	return (
		<div>
			<hr />
			<br />
			<h2>{titleText}</h2>
			<p>{text}</p>
		</div>
	);
};

const App = () => {
	const anecdotes = [
		'If it hurts, do it more often',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
	];

	const [selected, setSelected] = useState(0);
	const [voteCount, setVoteCount] = useState(
		new Array(anecdotes.length).fill(0)
	);
	console.log(selected);
	console.log(voteCount);

	/* Functions */

	const getRandAnecdote = (arr) => Math.floor(Math.random() * arr.length);

	const getSelectedAnecdote = () => {
		setSelected(getRandAnecdote(anecdotes));
	};

	const voteAnecdote = () => {
		const copyArray = [...voteCount];
		copyArray[selected] += 1;
		setVoteCount(copyArray);
	};

	const getLargestVote = (array) => {
		return array.indexOf(Math.max(...array));
	};

	console.log(getLargestVote(voteCount));

	return (
		<div>
			<h1> Anecdotes </h1>
			<br />
			<Display text={anecdotes[selected]} />
			<Button handleClick={getSelectedAnecdote} text={'Generate'} />
			<Button handleClick={voteAnecdote} text={'Vote'} />
			<Display text={`Votes: ${voteCount[selected]}`} />
			<br />
			<DisplayTopAnecdote
				titleText={'Top Voted Anecdote'}
				text={anecdotes[getLargestVote(voteCount)]}
			/>
		</div>
	);
};

export default App;
