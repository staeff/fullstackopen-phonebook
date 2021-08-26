import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', id: 'Artos Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  // function to create new name
  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      // receives content from the components newName state
      name: newName,
      id: newName,
    }

    const existing_ids = persons.map(person => person.id)

    if (existing_ids.includes(newName)) {
      alert(`${newName} is already added to the phonebook`)
      setNewName('')
    } else {
      setPersons(persons.concat(nameObject))
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input  type='text' value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Person key={person.id} person={person} />
        )}
      </ul>
    </div>
  )
}

export default App
