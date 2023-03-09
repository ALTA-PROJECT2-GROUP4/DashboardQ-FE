export interface MenteeType {
  id?: any;
  name?: string;
  nameEme?: string;
  phone?: string;
  phoneEme?: string;
  email?: string;
  team?: string;
  gender?: string;
  role?: string;
  address?: string;
  homeAddress?: string;
  date_birth?: string;
  telegram?: string;
  class?: string;
  status?: string;
  statusEme?: string;
  category?: string;
  major?: string;
  graduate?: string;
}

export interface ClassType {
  id: number;
  name: string;
  start_class: string;
  end_class: string;
  mentor: string;
}
