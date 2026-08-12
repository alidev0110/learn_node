import notes from "../data/notes.js";

const createNote = (req, res) => {
  const { title, content } = req.body;
  const note = { id: notes.length + 1, title, content };
  notes.push(note);
  return res.status(201).json({
    message: "Note created successfully",
    note,
  });
};

const getAllNotes = (req, res) => {
  return res.status(200).json(notes);
};

const deleteNote = (req, res) => {
  const id = Number(req.params.id);
  const index = notes.findIndex((note) => note.id === id);
  if (index === -1) {
    return res.status(404).json({
      message: "Note not found",
    });
  }
  notes.splice(index, 1);
  return res.status(200).json({
    message: "Note deleted successfully",
  });
};

const updateNote = (req, res) => {
  const id = Number(req.params.id);
  const { title, content } = req.body;
  const note = notes.find((note) => note.id === id);
  if (!note) {
    return res.status(404).json({
      message: "Note not found",
    });
  }

  note.title = title;
  note.content = content;

  return res.status(200).json({
    message: "Note updated successfully",
    note,
  });
};
export { createNote, getAllNotes, deleteNote, updateNote };
