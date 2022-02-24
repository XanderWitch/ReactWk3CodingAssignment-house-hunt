import React, { useState } from 'react';

export const NewNoteForm = (props) => {
	const [name, setName] = useState('');
	const [text, setText] = useState('');

	//define onSubmit
	const onSubmit = (event) => {
		event.preventDefault();
		if (name && text) {
			props.addNewNote({ name, text });
			setName(''); //reset value
			setText(''); //reset value
		} else {
			console.log('invalid input');
		}
	};

	return (
		<div>
			<h4>Add a new note for this house</h4>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					placeholder='Name this note'
					onChange={(event) => setName(event.target.value)}
					value={name}
				/>
				<input
					type='text'
					placeholder='Add your note here'
					onChange={(event) => setText(event.target.value)}
					value={text}
				/>
				<button type='submit'>Add Note</button>
			</form>
		</div>
	);
};
