import editIcon from '../../../assets/edit.svg'
const EditButton = () => {
  return (
    <button className='h-10 w-10'>
      <img src={editIcon} alt="folder icon" className="w-full h-full" />
    </button>
  )
}
export default EditButton