interface Meta {
  from: number;
  to: number;
  last_page: number;
  total: number;
}

interface Result {
  data: Items[];
  meta: Meta;
}

interface Items {
  title: string;
  published_at: string;
  medium_image: [];
  small_image: [];
}
