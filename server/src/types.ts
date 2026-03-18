export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  maxCapacity: number;
  attendees: User[];
  // NOTE: There is no waitlist yet — candidates will implement this
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
