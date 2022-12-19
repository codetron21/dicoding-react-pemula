import React from "react";

const NoteItem = ({ id, title, body, archived, onDelete, onArchive }) => (
  <div>
    <h5>{title}</h5>
    <p>{body}</p>
    <div>
      <button type="button" onClick={() => onDelete(id)}>
        Hapus
      </button>
      <button type="button" onClick={() => onArchive(id)}>
        {archived ? "Pindahkan" : "Arsipkan"}
      </button>
    </div>
  </div>
);

export default NoteItem;
