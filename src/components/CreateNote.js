import React from "react";

import LabelNote from "./LabelNote";
import Spacer from "./Spacer";

class CreateNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      buttonEnabled: true,
    };
  }

  onTitleChange = (e) => {
    const title = e.target.value;

    this.setState({
      title,
    });
  };

  onBodyChange = (e) => {
    const body = e.target.value;
    const limit = 50;

    if (body.length >= limit) {
      this.setState({
        buttonEnabled: false,
      });
      alert("Deskripsi tidak boleh lebih dari 50 karakter");
      return;
    }

    this.setState({
      body,
      buttonEnabled: true,
    });
  };

  render() {
    return (
      <div className="note-create">
        <LabelNote label="Tambah Catatan" />
        <Spacer v={20} />
        <input
          value={this.state.title}
          placeholder="Judul"
          onChange={this.onTitleChange}
        />
        <input
          value={this.state.body}
          type="textarea"
          placeholder="Deskripsi"
          onChange={this.onBodyChange}
        />
        <button
          type="button"
          onClick={() =>
            this.props.onAddNoteSubmitted(this.state.title, this.state.body)
          }
          disabled={!this.state.buttonEnabled}
        >
          Tambah
        </button>
      </div>
    );
  }
}

export default CreateNote;
