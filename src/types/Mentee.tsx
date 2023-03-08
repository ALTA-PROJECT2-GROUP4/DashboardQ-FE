export interface MenteeType {
  id?: number;
  name?: string;
  class?: string;
  status?: string;
  category?: string;
  gender?: string;
}

export interface ClassType {
  id: number;
  name: string;
  start_class: string;
  end_class: string;
  mentor: string;
}
