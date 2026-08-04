import { createRoot } from 'react-dom/client'
import "./index.css"
import Header from "./components/Header.jsx"
import { exampleActivities } from "./test.js"

function ExampleCard ({ example }) {
  const { id, title, description, category, date, priority } = example;
  return (
    <div className="exampleCard">
      <p>ID: {id}</p>
      <p>Name: {title}</p>
      <p>Description: {description}</p>
      <p>Category: {category}</p>
      <p>Date: {date}</p>
      <p>Priority: {priority}</p>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <>
  <Header
      title="Activity Planner"
      links={[
        { href: "/", label: "Home" },
        { href: "/activities", label: "Activities" },
      ]}
  />
  <div>
    <h1>Activity Planner</h1>
    <h2>New Activity</h2>
    <p>Name:</p>
    <p>Description:</p>
    <p>Category:</p>
    <p>Priority:</p>
    <button>Submit</button>
  </div>
  <h2>Example Activities</h2>
  <div style={{display: "flex", gap: "1rem", flexWrap: "wrap"}}>
    {exampleActivities.map((example) => (
      <ExampleCard key={example.id} example={example} />
    ))}
  </div>
  <h2>Activity List</h2>
  </>
)  