import type { Tour } from '../components/TourItem';
import { formatDate, getSeatLabel, groupByCity } from '../utils/tour';

const makeTour = (id: string, city: string, departure: string): Tour => ({
  id,
  name: `Tour ${id}`,
  city,
  days: 3,
  price: 1000000,
  seats: 5,
  departure,
  image: 'https://example.com/a.jpg',
  isFavorite: false,
});

const tours: Tour[] = [
  makeTour('1', 'Đà Nẵng', '2026-12-01'),
  makeTour('2', 'Đà Lạt', '2026-11-20'),
  makeTour('3', 'Đà Lạt', '2026-11-05'),
  makeTour('4', 'Hà Nội', '2026-10-15'),
];

describe('groupByCity', () => {
  const groups = groupByCity(tours);

  test('đúng số nhóm', () => {
    expect(groups).toHaveLength(3);
  });

  test('các nhóm sắp xếp theo tên thành phố A → Z', () => {
    expect(groups.map((g) => g.title)).toEqual(['Đà Lạt', 'Đà Nẵng', 'Hà Nội']);
  });

  test('tour trong nhóm sắp xếp theo departure tăng dần', () => {
    const daLat = groups.find((g) => g.title === 'Đà Lạt');
    expect(daLat?.data.map((t) => t.departure)).toEqual(['2026-11-05', '2026-11-20']);
  });
});

describe('formatDate', () => {
  test('đổi YYYY-MM-DD sang DD/MM/YYYY', () => {
    expect(formatDate('2026-11-05')).toBe('05/11/2026');
  });
});

describe('getSeatLabel', () => {
  test('0 chỗ', () => {
    expect(getSeatLabel(0)).toBe('Hết chỗ');
  });

  test('3 chỗ (biên)', () => {
    expect(getSeatLabel(3)).toBe('Chỉ còn 3 chỗ');
  });

  test('4 chỗ (biên)', () => {
    expect(getSeatLabel(4)).toBe('Còn 4 chỗ');
  });
});
