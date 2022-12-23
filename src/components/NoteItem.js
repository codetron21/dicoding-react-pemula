import React from "react";

import Spacer from "./Spacer";

const NoteItem = ({ id, title, body, archived, onDelete, onArchive }) => (
  <div className="note-item">
    <h3>{title}</h3>
    <p>{body}</p>
    <Spacer v={10} />
    <div className="note-item__box-button">
      <button type="button" onClick={() => onDelete(id)}>
        Hapus
      </button>
      <Spacer h={10} />
      <button type="button" onClick={() => onArchive(id)}>
        {archived ? "Pindahkan" : "Arsipkan"}
      </button>
    </div>
  </div>
);

export default NoteItem;
