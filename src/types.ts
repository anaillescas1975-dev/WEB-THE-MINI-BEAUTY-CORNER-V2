export interface ActivityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  isComplementary?: boolean;
}

export interface AnimationScope {
  id: string;
  title: string;
  category: 'private' | 'commercial';
  description: string;
  items: string[];
  badge: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  girlsCount: number;
  includePacks: boolean;
  message: string;
  paymentMethod: 'bizum' | 'cash';
}

export interface TestimonialItem {
  id: string;
  parentName: string;
  eventType: string;
  location: string;
  rating: number;
  quote: string;
  dateLabel: string;
  isUserSubmitted?: boolean;
}
