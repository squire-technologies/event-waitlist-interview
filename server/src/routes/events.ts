import { Router, Request, Response } from "express";
import { events, users } from "../data/seed";
import { ApiResponse, Event, User } from "../types";

const router = Router();

// GET /api/events — list all events
router.get("/", (_req: Request, res: Response<ApiResponse<Event[]>>) => {
  res.json({ success: true, data: events });
});

// GET /api/events/:id — get a single event
router.get("/:id", (req: Request, res: Response<ApiResponse<Event>>) => {
  const event = events.find((e) => e.id === req.params.id);
  if (!event) {
    return res.status(404).json({ success: false, error: "Event not found" });
  }
  res.json({ success: true, data: event });
});

// POST /api/events/:id/join — add a user to the event
router.post("/:id/join", (req: Request, res: Response<ApiResponse<Event>>) => {
  const event = events.find((e) => e.id === req.params.id);
  if (!event) {
    return res.status(404).json({ success: false, error: "Event not found" });
  }

  const { userId } = req.body as { userId: string };
  const user = users.find((u) => u.id === userId);
  if (!user) {
    return res.status(404).json({ success: false, error: "User not found" });
  }

  const alreadyJoined = event.attendees.some((a) => a.id === userId);
  if (alreadyJoined) {
    return res
      .status(400)
      .json({ success: false, error: "User already joined" });
  }

  event.attendees.push(user);

  res.json({ success: true, data: event });
});

// GET /api/users — list available users (for the UI user picker)
router.get("/", (_req: Request, res: Response<ApiResponse<User[]>>) => {
  res.json({ success: true, data: users });
});

export default router;
