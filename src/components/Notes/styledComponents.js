import styled from 'styled-components'

export const NotesBgContainer = styled.div`
  padding: 25px;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NotesTitle = styled.h1`
  font-size: 30px;
  font-weight: 500;
  font-family: 'Bree Serif';
  color: #4c63b6;
`

export const NotesForm = styled.form`
  height: 220px;
  width: 80vw;
  box-shadow: #475569 0px 0px 4px 0px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

export const TitleInput = styled.input`
  height: 30px;
  width: 100%;
  color: #475569;
  border-style: none;
  outline: none;
`

export const NotesTextArea = styled.textarea`
  width: 100%;
  margin-top: 20px;
  color: #475569;
  border-style: none;
  outline: none;
`

export const AddNotesButton = styled.button`
  height: 35px;
  width: 60px;
  border-style: none;
  border-radius: 3px;
  background-color: #4c63b6;
  color: #ffffff;
  font-size: 13px;
  margin-top: 5px;
  align-self: flex-end;
  margin-right: 25px;
`

export const NotesItemListContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
`

export const EmptyNotesViewContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const EmptyNotesViewImage = styled.img`
  height: 150px;
  width: 150px;
`

export const EmptyNotesTitle = styled.h1`
  font-size: 30px;
  font-weight: 500;
  color: #334155;
  margin-top: 15px;
`

export const EmptyNotesDescription = styled.p`
  font-size: 15px;
  color: #334155;
`
