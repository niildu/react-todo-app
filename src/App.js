import React, { Component } from 'react';
import NoteList from './components/NoteList';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      noteText: '',
      notesList: []
    }
  }

  renderNoteList(title) {
    return <NoteList value={title} />;
  }

  render() {

    let notesList = this.state.notesList.map((val, key) => {
      return <NoteList key={key} text={val} />
    });


    return (
      <div className="container">
        <div className="header">Sample Todo Application</div>
        <div className="body">
          <NoteList title="Todo"/>
          <NoteList title="Doing"/>
          <NoteList title="Done"/>
          {notesList}
          <div className="btn">+ Add another list</div>
        </div>
      </div>
    );
  }
}

export default App;