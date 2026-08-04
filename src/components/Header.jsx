function Header({ title = "Activity Planner", links = [] }) {
    return (
      <header className="header">
        <h1>{title}</h1>
        {links.length > 0 && (
          <nav>
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    );
  }
  
  export default Header;