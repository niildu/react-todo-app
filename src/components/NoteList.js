import React, { Component } from 'react';
import Note from './Note';

class NoteList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: this.props.title,
			noteText: '',
			notes: [],
			btnText: '+ Add a task'
		}
	}

	addNote() {
		if (this.state.noteText === '') {return}

		this.state.notes.push(this.state.noteText);
		this.setState({noteText: '', btnText: '+ Add another task' });
		this.textInput.focus();
	}

	handleKeyPress(event) {
		if (event.key === 'Enter') {
			this.addNote();
		}
	}

	updateNoteText(noteText) {
		this.setState({noteText: noteText.target.value});
	}

	getName() {
		console.log(this.state.notes.length);
		return this.state.notes.length > 0 ? "another" : "a";
	}

	render() {
		let notes = this.state.notes.map((val, key) => {
      		return <Note key={key} text={val} />
    	});

		return (
			<div className="noteList">
				<div className="noteListTitle">{this.state.title}</div>
				{notes}
				<input type="text"
					ref={((input) => {this.textInput = input})}
					className="textInput"
					value={this.state.noteText}
					onChange={noteText => this.updateNoteText(noteText)}
					onKeyPress={this.handleKeyPress.bind(this)}
					placeholder="Add new task"
					/>
				<div className="btn" onClick={this.addNote.bind(this)}>{this.state.btnText}</div>
			</div>
		)
	}
}

export default NoteList;