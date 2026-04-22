# Fullstack Engineering Interview — Event Waitlist Challenge

## Overview

A 90-minute technical challenge in two parts, conducted on the same codebase. You'll build core functionality by hand in Part 1, then extend it with AI tools in Part 2.

| Section | Duration | AI Tools |
| --- | --- | --- |
| Part 1 — Build the Foundations | 40 min | ❌ Not allowed |
| Break | 5–10 min | — |
| Part 2 — Extend with AI | 40 min | ✅ Anything goes |

**Tech stack:** React + TypeScript (Vite) frontend, Node + Express + TypeScript backend. In-memory data (no database setup required).

---

## The App

This is a simple event page. Users can join a workshop event, and there's a list of attendees. The event has a **max capacity of 5** (kept small for easy testing).

Right now, the app has a bug: **there is no capacity enforcement**. You can add unlimited users and the app won't stop you. There's also no way to leave an event once you've joined.

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
2. **Waitlist** — Users who try to join a full event are added to a waitlist instead.
3. **Leave** — Any attendee can leave the event. When they do, the first person on the waitlist is automatically promoted to attendee.
4. **UI** — The interface should show attendees and waitlisted users separately. Waitlisted users should see their position in line.

Work across both the backend and frontend.

---

## Part 2 — Extend with AI (40 min, AI allowed)

Turn on whatever AI tools you normally use — Copilot, Claude, ChatGPT, Cursor, anything. Tackle these features in any order — build as many as you can. Don't feel pressured to finish all of them; depth matters more than breadth.

1. **Real-time updates** — When someone joins or leaves from any browser tab, all connected clients should update without refreshing. (SSE or WebSockets)
2. **Notification preferences** — Users can choose how they want to be notified when promoted from the waitlist: in-app toast, email (just log to console), or none.
3. **Quiet hours** — Users can set a do-not-disturb window (e.g., 10pm–8am). Promotions during quiet hours are queued and delivered when the window ends.
4. **Admin panel** — A separate view where an admin can see all events, manually reorder the waitlist, or force-remove attendees.
