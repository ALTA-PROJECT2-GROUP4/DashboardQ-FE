export interface MenteeType {
  id?: any;
  name?: string;
  phone?: string;
  email?: string;
  team?: string;
  gender?: string;
  role?: string;
  address?: string;
  date_birth?: string;

  class?: string;
  status?: string;
  category?: string;
}

export interface ClassType {
  id: number;
  name: string;
  start_class: string;
  end_class: string;
  mentor: string;
}
