import React, { Component } from 'react';

class Note extends Component {

	render() {
		return (
			<div className="note">
				<div className="noteText">{this.props.text}</div>
				<button className="btn">R</button>
			</div>
		)
	}
}

export default Note;