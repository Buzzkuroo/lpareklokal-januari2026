
export interface Event {
  id: string;
  title: string;
  category: 'Entertainment' | 'Gaming' | 'Workshop';
  location: string;
  date: {
    month: string;
    day: string;
  };
  description: string;
  status: string;
  gradient: string;
  icon: string;
}
