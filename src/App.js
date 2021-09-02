import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  // function to create new name
  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      // receives content from the components newName state
      name: newName,
      number: newNumber,
    }

    const existing_names = persons.map(person => person.name)

    if (existing_names.includes(newName)) {
      alert(`${newName} is already added to the phonebook`)
      resetNewState()
    } else {
      setPersons(persons.concat(nameObject))
      resetNewState()
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const resetNewState = () => {
    setNewName('')
    setNewNumber('')
  }

  const personsToShow = newFilter ?
    persons.filter(person => person.name.toLowerCase().includes(newFilter)) :
    persons

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input type="text" value={newFilter} onChange={handleFilterChange} />
      <h2>Add new contact</h2>
      <form onSubmit={addName}>
        <div>
          name: <input  type='text' value={newName} onChange={handleNameChange} /><br />
          number: <input  type='text' value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person =>
          <Person key={person.name} person={person} />
        )}
      </ul>
    </div>
  )
}

export default App
