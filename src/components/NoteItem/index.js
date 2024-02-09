import {NotesItemCard, NotesItemTitle, NotesItemPara} from './styledComponents'

const NotesItem = props => {
  const {notesDetails} = props

  const {title, notesDescription} = notesDetails

  return (
    <NotesItemCard>
      <NotesItemTitle>{title}</NotesItemTitle>
      <NotesItemPara>{notesDescription}</NotesItemPara>
    </NotesItemCard>
  )
}

export default NotesItem
