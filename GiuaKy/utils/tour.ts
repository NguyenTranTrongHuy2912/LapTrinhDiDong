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
  const groups = new Map<string, Tour[]>();

  tours.forEach((tour) => {
    const cityTours = groups.get(tour.city) ?? [];
    cityTours.push(tour);
    groups.set(tour.city, cityTours);
  });

  return Array.from(groups, ([title, data]) => ({
    title,
    data: [...data].sort((firstTour, secondTour) =>
      firstTour.departure.localeCompare(secondTour.departure),
    ),
  })).sort((firstGroup, secondGroup) =>
    firstGroup.title.localeCompare(secondGroup.title),
  );
}
