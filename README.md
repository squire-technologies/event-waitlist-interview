# Fullstack Engineering Interview — Event Waitlist Challenge

## Overview

A 90-minute technical challenge in two parts, conducted on the same codebase. You'll build core functionality by hand in Part 1, then extend it with AI tools in Part 2.

| Section | Duration | AI Tools |
| --- | --- | --- |
| Part 1 — Build the Foundations | 40 min | ❌ Not allowed |
| Break | 5–10 min | — |
| Part 2 — Extend with AI | 40 min | ✅ Agentic tool required |

**Tech stack:** React + TypeScript (Vite) frontend, Node + Express + TypeScript backend. In-memory data (no database setup required).

---

## The App

This is an **admin panel** for managing event attendance. An admin can select any user from a dropdown and add them to an event. The event has a **max capacity of 5** (kept small for easy testing).

Right now, the app has a bug: **there is no capacity enforcement**. You can add unlimited users and the app won't stop you. There's also no way to remove someone once they've been added.

### Setup

```bash
# Install all dependencies
npm run install:all

# Start both server and client (or run them separately)
npm run dev

# Or run individually:
npm run dev:server   # Express API on http://localhost:3001
npm run dev:client   # React app on http://localhost:5173
```

### Project Structure

```
├── server/
│   └── src/
│       ├── index.ts           # Express entry point
│       ├── types.ts           # Shared TypeScript types
│       ├── data/
│       │   └── seed.ts        # In-memory seed data (15 users, 1 event)
│       └── routes/
│           ├── events.ts      # Event endpoints (GET, POST /join)
│           └── users.ts       # User list endpoint
├── client/
│   └── src/
│       ├── App.tsx            # Root component
│       ├── api.ts             # Fetch helper
│       ├── types.ts           # Client-side types
│       ├── hooks/
│       │   └── useEvent.ts    # Event data hook
│       └── components/
│           ├── EventPage.tsx   # Main page
│           ├── AttendeeList.tsx # Attendee rendering
│           └── UserPicker.tsx  # User dropdown + join button
```

### Useful Endpoints

| Method | Path | Description |
| --- | --- | --- |
| GET | `/api/events` | List all events |
| GET | `/api/events/:id` | Get single event |
| POST | `/api/events/:id/join` | Join event (body: `{ userId }`) |
| GET | `/api/users` | List all users |
| GET | `/api/health` | Health check |

---

## Part 1 — Build the Foundations (40 min, no AI)

The event has a max capacity of 5 people. Your task is to build a waitlist system:

1. **Capacity enforcement** — When the event is full, new users should not be added as attendees.
2. **Waitlist** — When the event is full, users are added to a waitlist instead.
3. **Remove** — The admin can remove any attendee. When they do, the first person on the waitlist is automatically promoted to attendee.
4. **UI** — The interface should show attendees and waitlisted users separately. Waitlisted users should see their position in line.

Work across both the backend and frontend.

---

## Part 2 — Extend with AI (40 min, AI tools required)

Use an agentic coding tool — Claude Code, Cursor, or similar. Tackle these features in any order — build as many as you can. Don't feel pressured to finish all of them; depth matters more than breadth.

The admin panel you built in Part 1 manages attendance and the waitlist. Now extend it:

1. **Real-time updates** — Open the admin page in two browser windows side by side. When you make a change in one window (add a user, remove an attendee), the other window should update automatically without refreshing.
2. **Notification preferences** — Add a per-user setting (toast, email, or none) that controls what happens when that user gets promoted from the waitlist. "Toast" shows a notification banner on the admin page, "email" logs to the server console, "none" does nothing.
3. **Quiet hours** — Add a per-user do-not-disturb window (e.g., 10pm–8am). If a user would be promoted during their quiet hours, the promotion is held and applied when the window ends. Show the pending state in the UI.
4. **Waitlist management** — The admin can manually reorder the waitlist (e.g., drag-and-drop or move up/down buttons) and force-remove attendees or waitlisted users.
