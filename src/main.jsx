import { createRoot } from 'react-dom/client'
import "./index.css"
import Header from "./components/Header.jsx"
import ActivityCard from "./components/ActivityCard.jsx"
import { exampleActivities } from "./test.js"

createRoot(document.getElementById('root')).render(
  <>
  <Header
      title="Activity Planner"
      links={[
        { href: "/", label: "Home" },
        { href: "/activities", label: "Activities" },
      ]}
  />

  <div id="site-display">
    <div id="create-side" className="site-halves">
      <h1>Activity Planner</h1>
      <h2>New Activity</h2>
      <p>Name:</p>
      <p>Description:</p>
      <p>Category:</p>
      <p>Priority:</p>
      <button>Submit</button>
    </div>

    <div id="display-side" className="site-halves">
      <h2>Example Activities</h2>
      <div className="activity-display">
        {exampleActivities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
      <h2>Activity List</h2>
    </div>
  </div>
  </>
)  