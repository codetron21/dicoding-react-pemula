import React from "react";

import LabelNote from "../components/LabelNote";
import ListNote from "../components/ListNote";
import Text from "../components/Text";
import HeaderNote from "../components/HeaderNote";
import SearchNote from "../components/SearchNote";
import CreateNote from "../components/CreateNote";
import { getInitialData } from "../utils";

class NotesApp extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: getInitialData(),
      baseNotes: getInitialData(),
      query: "",
    };
  }

  getNotes = () => this.state.notes.filter((item) => !item.archived);

  getArchiveNote = () => this.state.notes.filter((item) => item.archived);

  onDelete = (noteId) => {
    const notes = this.state.notes.filter((item) => item.id !== noteId);

    this.setState({
      notes,
      baseNotes: notes,
    });
  };

  onArchive = (noteId) => {
    const notes = this.state.notes.map((item) => {
      if (item.id !== noteId) {
        return item;
      }

      item.archived = !item.archived;
      return item;
    });

    this.setState({
      notes,
      baseNotes: notes,
    });
  };

  onSearchSubmitted = (e) => {
    e.preventDefault();
    const query = this.state.query;
    this.setState((prevState) => ({
      notes: query
        ? prevState.notes.filter((note) =>
            note.title.toLowerCase().includes(query.toLowerCase())
          )
        : prevState.baseNotes,
      query,
    }));
  };

  onQueryChange = (e) => {
    const query = e.target.value;
    this.setState((prevState) => ({
      notes: query
        ? prevState.notes.filter((note) =>
            note.title.toLowerCase().includes(query.toLowerCase())
          )
        : prevState.baseNotes,
      query,
    }));
  };

  onAddNoteSubmitted = (title, body) => {
    if (!title.length || !body.length) return;

    const notes = this.state.notes;

    const date = new Date().toISOString();
    const id = ++notes.length;

    const note = {
      id,
      title,
      body,
      createdAt: date,
      archived: false,
    };

    notes.push(note);

    this.setState({
      notes,
      baseNotes: notes,
    });
  };

  render() {
    return (
      <>
        <HeaderNote title="Notes" />
        <SearchNote
          value={this.state.query}
          hint="Judul catatan"
          onChange={this.onQueryChange}
          onSubmit={this.onSearchSubmitted}
        />
        <CreateNote onAddNoteSubmitted={this.onAddNoteSubmitted} />
        <LabelNote label="Catatan Aktif" />
        {this.getNotes().length ? (
          <ListNote
            items={this.getNotes()}
            onDelete={this.onDelete}
            onArchive={this.onArchive}
          />
        ) : (
          <Text>Tidak ada catatan</Text>
        )}

        <LabelNote label="Catatan Arsip" />
        {this.getArchiveNote().length ? (
          <ListNote
            items={this.getArchiveNote()}
            onDelete={this.onDelete}
            onArchive={this.onArchive}
          />
        ) : (
          <Text>Tidak ada catatan</Text>
        )}
      </>
    );
  }
}

export default NotesApp;
