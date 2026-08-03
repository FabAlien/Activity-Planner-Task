import { createRoot } from 'react-dom/client'
import { exampleActivities } from "./test.js"

function ExampleCard ({ example }) {
  const { id, title, description, category, date, priority } = example;
  return (
    <div>
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
  <h1>Activity Planner</h1>
  <div>
    <h2>New Activity</h2>
    <p>Name:</p>
    <p>Description:</p>
    <p>Category:</p>
    <p>Priority:</p>
  </div>
  <h2>Example Activities</h2>
  {exampleActivities.map((example) => (
      <ExampleCard key={example.id} example={example} />
    ))}
  <h2>Activity List</h2>
  </>
)  