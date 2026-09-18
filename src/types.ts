import { ReactNode } from "react";

export type ROUTE = {
  name: string;
  title: string;
  element: ReactNode;
  path: string;
  index?: boolean;
};

export interface ResumeAnalysis {
  id: string;
  atsScore: number;
  summary: string;
  matchedSkills: string[];
  missingSkills: string[];
  keywords: string[];
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
  improvedSummary: string;
  jobRole: string;
  company?: string;
  createdAt: string;
}

export type JobStatus =
  | "wishlist"
  | "applied"
  | "interview"
  | "selected"
  | "rejected";

export interface Job {
  id: string;
  company: string;
  title: string;
  location?: string;
  applicationDate?: string;
  url?: string;
  notes?: string;
  status: JobStatus;
}

export interface User {
  id: string;
  name: string;
  email: string;
  professionalTitle?: string;
  skills: string[];
  experience?: string;
  preferredRole?: string;
  preferredLocation?: string;
  avatar?: string;
}

// import type { User } from './user';

export interface AuthResponse {
  user: User;
  token: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}
