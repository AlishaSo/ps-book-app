export default function Header() {
  return (
    <header className='theme-color'>
      <h1>Book App</h1>
      <nav>
        <ul>
          <li className='nav-btn'><a className='nav-link' href='#'>Home</a></li>
          <li className='nav-btn'><a className='nav-link' href='#'>Books</a></li>
          <li className='nav-btn'><a className='nav-link' href='#'>About</a></li>
        </ul>
      </nav>
    </header>
  )
}