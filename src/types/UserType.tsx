export interface UserType {
  id?: number;
  name?: string;
  email?: string;
  team?: string;
  role?: string;
}

export interface MenteTypes {
  id: number;
  name: string;
  class: string;
  status: string;
  category: string;
  gender: string;
}

export interface FeedbackTypes {
  user_id: number;
  name: string;
  created_at: string;
  status: string;
  notes: note;
}

type note = {
  notes_id: number;
  notes: string;
};
