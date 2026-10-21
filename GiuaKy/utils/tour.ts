import type { Tour } from '../components/TourItem';

export type TourGroup = {
  title: string;
  data: Tour[];
};

export function groupByCity(tours: Tour[]): TourGroup[] {
  const groups: TourGroup[] = [];

  for (const tour of tours) {
    let group = groups.find((g) => g.title === tour.city);
    if (!group) {
      group = { title: tour.city, data: [] };
      groups.push(group);
    }
    group.data.push(tour);
  }

  groups.forEach((g) => g.data.sort((a, b) => a.departure.localeCompare(b.departure)));
  groups.sort((a, b) => a.title.localeCompare(b.title));
  return groups;
}

export function formatDate(date: string): string {
  const [year, month, day] = date.split('-');
  return `${day}/${month}/${year}`;
}

export function getSeatLabel(seats: number): string {
  if (seats === 0) return 'Hết chỗ';
  if (seats <= 3) return `Chỉ còn ${seats} chỗ`;
  return `Còn ${seats} chỗ`;
}

export function formatPrice(price: number): string {
  return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' ₫';
}
