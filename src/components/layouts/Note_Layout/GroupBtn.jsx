import NotesBtn from "./NotesBtn"
import UpdateBtn from "./UpdateBtn"
import DeleteBtn from "./DeleteBtn"
const GroupBtn = ({noteId}) => {
  return (
    <div className="flex flex-row gap-4 max-[371px]:flex-col">
      <NotesBtn />
      <UpdateBtn noteId={noteId}   />
      <DeleteBtn noteId={noteId} />
    </div>
  )
}
export default GroupBtn