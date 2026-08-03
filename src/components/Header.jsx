function Header({ title = "Activity Planner", links = [] }) {
    return (
      <header>
        <h1>{title}</h1>
        {links.length > 0 && (
          <nav>
            <ul style={{ display: "flex", gap: "1rem", listStyle: "none", padding: 0 }}>
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