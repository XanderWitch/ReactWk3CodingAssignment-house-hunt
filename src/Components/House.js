import React from 'react';
import { NewNoteForm } from './NewNoteForm';
import { NewHouseForm } from './NewHouseForm';

export const House = (props) => {
	const { house, updateHouse } = props;

	const deleteNote = (noteId) => {
		const updatedHouse = {
			...house,
			notes: house.notes.filter((x) => x._id !== noteId),
		};
		updateHouse(updatedHouse);
	};

	const addNewNote = (note) =>
		updateHouse({ ...house, notes: [...house.notes, note] });

	const notes = () => (
		<ul>
			{house.notes.map((note, index) => (
				<li key={index}>
					<label>{`${note.name}, Note: ${note.text}`}</label>
					<button onClick={(event) => deleteNote(note._id)}>
						Delete Note
					</button>
				</li>
			))}
		</ul>
	);

	return (
		<div>
			<h1>{house.location}</h1>
			{notes({ notes, houseId: house._id, deleteNote })}
			<NewNoteForm addNewNote={addNewNote} />

			<NewHouseForm />
		</div>
	);
};
