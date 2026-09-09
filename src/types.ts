export type ThemeMode = 'dark' | 'light';

export interface ServiceItem {
  id: string;
  name: string;
  category: 'Cut' | 'Beard' | 'Combo' | 'Grooming';
  description: string;
  duration: string;
  iconName: string;
  popular?: boolean;
}

export interface BarberItem {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  imageUrl: string;
  isAvailable: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'fades' | 'beards' | 'cuts' | 'studio';
  categoryLabel: string;
  imageUrl: string;
  altText: string;
}

export interface ReviewItem {
  id: string;
  clientInitials: string;
  badge: string;
  reviewText: string;
  serviceMentioned: string;
  dateTag: string;
}

export interface LocationItem {
  id: string;
  city: string;
  state: string;
  regionDescription: string;
  phone: string;
  status: 'Open' | 'Coming Soon';
  isPrimary: boolean;
}

export interface AppointmentRequest {
  fullName: string;
  phone: string;
  email: string;
  serviceId: string;
  serviceName: string;
  barberId: string;
  barberName: string;
  date: string;
  timeSlot: string;
  notes: string;
}
