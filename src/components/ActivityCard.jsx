function ActivityCard ({ activity }) {
    const { id, title, description, category, date, priority } = activity;
    return (
      <div className="activity-card">
        <p>Name: {title}</p>
        <p>Description: {description}</p>
        <p>Category: {category}</p>
        <p>Date: {date}</p>
        <p>Priority: {priority}</p>
      </div>
    );
  }

  export default ActivityCard;