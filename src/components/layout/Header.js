import React from 'react'
import { Link} from 'react-router-dom';
export default function Header() {
  return (
    <div>
      <header style={headerStyle}>
          <h1>ToDo List</h1>
          <Link to="/" style={linkStyle}>Home</Link> | <Link to="/about" style={linkStyle}>About</Link>
      </header>
    </div>
  )
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

const headerStyle = {
  backgroundColor: '#333',
  padding: '20px',
  textAlign: 'center',
  color: '#fff'
}