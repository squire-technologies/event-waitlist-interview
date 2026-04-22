import { User } from "../types";

interface AttendeeListProps {
  attendees: User[];
  title: string;
  emptyMessage: string;
}

export function AttendeeList({ attendees, title, emptyMessage }: AttendeeListProps) {
  return (
    <div>
      <h2 className="section-title">{title}</h2>
      {attendees.length === 0 ? (
        <p className="empty-state">{emptyMessage}</p>
      ) : (
        <ul className="attendee-list">
          {attendees.map((user) => (
            <li key={user.id}>
              <div>
                <span className="attendee-name">{user.name}</span>
                <br />
                <span className="attendee-email">{user.email}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
