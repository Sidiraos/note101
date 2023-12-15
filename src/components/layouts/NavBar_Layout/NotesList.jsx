import NotesListItem from "./NotesListItem";
import {useSelector , shallowEqual} from 'react-redux';
const NotesList = () => {
  console.log('notes list render');
    const notesData = useSelector(state => state.notes , shallowEqual);
    const {notes} = notesData
  return (
    <ul className="divide-y divide-slate-300">
      {notes.length > 0 && notes.map((note) => (
        <NotesListItem key={note.id} note={note} />
      ))}

    </ul>
  )
}
export default NotesList