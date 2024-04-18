export type Tag = 'Today' | 'Next week';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  tag: Tag;
  date: string;
}
