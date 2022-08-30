import { useEffect, useState } from 'react'

export function Paginate() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos').then((response) =>
      response.json().then((data) => {
        setTodos(data)
        console.log(data)
      }),
    )
  }, [])

  return (
    <>
      <h1>Paginate Component</h1>
    </>
  )
}
