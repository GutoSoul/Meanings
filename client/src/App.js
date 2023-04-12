import React, { useState, useEffect } from 'react'

function App () {
  const [dadosServer, setdadosServer] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:5000/api").then(Response => Response.json()).then( data => {setdadosServer(data)}
    )
  }, [])

  return (
    <div>
      <h1>Olá Mundo!</h1>
      <p>Primeiro App</p>
      {(typeof dadosServer.users === 'undefined') ? (
        <p>Loading...</p>
      ): ( dadosServer.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))

        )
      }
    </div>
  )}
  
  export default App