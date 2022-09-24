import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import NotesGrid from './components/NotesGrid';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  const [notes, setNotes] = useState( [
    {
        id: nanoid(),
        text: 'First text',
        date: '22.09.2022'
    },
    {
        id: nanoid(),
        text: 'Sec text',
        date: '22.09.2022'
    },
    {
        id: nanoid(),
        text: 'Trd text',
        date: '22.09.2022'
    },
    {
        id: nanoid(),
        text: 'Fth text',
        date: '22.09.2022'
    }
])
  const [searchText,setSearchText] = useState('')
  const [darkMode, setDarkMode] = useState(false)
  function pushNotes(text) {
    const date = new Date();
    let note = {
      id : nanoid(),
      text: text,
      date : date.toLocaleDateString()
    }
    setNotes([...notes,note])
  }
  function deleteNotes(id){
    setNotes(notes.filter((note) => note.id !== id))
  }
  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <main className='main'>
      <Header handleDarkMode={setDarkMode}/>
      <Search handleSearchText={setSearchText}/>
      <NotesGrid notes={notes.filter(note => note.text.toLowerCase().includes(searchText))} pushNotes={pushNotes} deleteNotes={deleteNotes}/>
      </main>
    </div>
  );
}

export default App;
