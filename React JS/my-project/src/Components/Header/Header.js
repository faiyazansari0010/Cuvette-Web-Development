import "./Header.css"

function Header() {
  return (
    <>
      <header>
        <div className="logo">React App</div>

        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>
    </>
  )
}

export default Header;