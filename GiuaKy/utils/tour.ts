export type Tour = {
  id: string;
  name: string;
  city: string;
  days: number;
  price: number;
  seats: number;
  departure: string;
  image: string;
  isFavorite: boolean;
};

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
