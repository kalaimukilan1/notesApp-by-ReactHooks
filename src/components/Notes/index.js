import {useState} from 'react'
import {v4 as uuid} from 'uuid'

import NotesItem from '../NoteItem'

import {
  NotesBgContainer,
  NotesTitle,
  TitleInput,
  NotesForm,
  NotesTextArea,
  AddNotesButton,
  NotesItemListContainer,
  EmptyNotesViewContainer,
  EmptyNotesViewImage,
  EmptyNotesTitle,
  EmptyNotesDescription,
} from './styledComponents'

const Notes = () => {
  const [title, changeTitle] = useState('')
  const [notesDescription, changeDescription] = useState('')
  const [notesList, changeNotesList] = useState([])

  const onChangeTitle = event => changeTitle(event.target.value)

  const onChangeDescription = event => changeDescription(event.target.value)

  const onAddNotesItem = event => {
    event.preventDefault()

    if (title.length !== 0 && notesDescription.length !== 0) {
      const newNotes = {
        id: uuid(),
        title,
        notesDescription,
      }

      changeNotesList(prevState => [...prevState, newNotes])
      changeTitle('')
      changeDescription('')
    }
  }

  const EmptyNotesView = () => (
    <EmptyNotesViewContainer>
      <EmptyNotesViewImage
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <EmptyNotesTitle>No Notes Yet</EmptyNotesTitle>
      <EmptyNotesDescription>
        Notes you add will appear here
      </EmptyNotesDescription>
    </EmptyNotesViewContainer>
  )

  return (
    <NotesBgContainer>
      <NotesTitle>Notes</NotesTitle>
      <NotesForm onSubmit={onAddNotesItem}>
        <TitleInput
          type="text"
          placeholder="Title"
          value={title}
          onChange={onChangeTitle}
        />
        <NotesTextArea
          rows="5"
          placeholder="Take a Note..."
          value={notesDescription}
          onChange={onChangeDescription}
        />
        <AddNotesButton type="submit">Add</AddNotesButton>
      </NotesForm>

      {notesList.length === 0 ? (
        EmptyNotesView()
      ) : (
        <NotesItemListContainer>
          {notesList.map(eachNote => (
            <NotesItem key={eachNote.id} notesDetails={eachNote} />
          ))}
        </NotesItemListContainer>
      )}
    </NotesBgContainer>
  )
}
export default Notes
