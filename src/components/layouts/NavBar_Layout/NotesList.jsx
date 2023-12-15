import NotesListItem from "./NotesListItem";
import {useSelector , shallowEqual} from 'react-redux';
const NotesList = () => {
  console.log('notes list render');
    const notesData = useSelector(state => state.notes , shallowEqual);
    const {notes} = notesData
  return (
    <ul>
      {notes && notes.map((note) => (
        <NotesListItem key={note.id} note={note} />
      ))}

    </ul>
  )
}
export default NotesList