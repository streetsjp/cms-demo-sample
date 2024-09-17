export const categories = [
  'entertainment',
  'entertainment-news',
  'entertainment-interview',
  'koushitsu',
  'domestic',
  'international',
  'international-news',
  'international-knews',
  'sports',
  'life',
  'life-beauty',
  'life-health',
  'life-living',
  'life-gourmet',
  'region',
  'column',
  'fortune',
] as const;
export type Category = (typeof categories)[number];
export const CATEGORY = {
  ENTERTAINMENT: 'entertainment' as Category,
  ENTERTAINMENT_NEWS: 'entertainment-news' as Category,
  ENTERTAINMENT_INTERVIEW: 'entertainment-interview' as Category,
  KOUSHITSU: 'koushitsu' as Category,
  DOMESTIC: 'domestic' as Category,
  INTERNATIONAL: 'international' as Category,
  INTERNATIONAL_NEWS: 'international-news' as Category,
  INTERNATIONAL_KNEWS: 'international-knews' as Category,
  SPORTS: 'sports' as Category,
  LIFE: 'life' as Category,
  LIFE_BEAUTY: 'life-beauty' as Category,
  LIFE_HEALTH: 'life-health' as Category,
  LIFE_LIVING: 'life-living' as Category,
  LIFE_GOURMET: 'life-gourmet' as Category,
  REGION: 'region' as Category,
  COLUMN: 'column' as Category,
  FORTUNE: 'fortune' as Category,
};

export const nameByCategory = (value: string | Category) => {
  switch (value) {
    case CATEGORY.ENTERTAINMENT:
      return '芸能';
    case CATEGORY.ENTERTAINMENT_NEWS:
      return 'エンタメニュース';
    case CATEGORY.ENTERTAINMENT_INTERVIEW:
      return 'インタビュー';
    case CATEGORY.KOUSHITSU:
      return '皇室';
    case CATEGORY.DOMESTIC:
      return '国内';
    case CATEGORY.INTERNATIONAL:
      return '海外';
    case CATEGORY.INTERNATIONAL_NEWS:
      return '海外ニュース';
    case CATEGORY.INTERNATIONAL_KNEWS:
      return '韓流ニュース';
    case CATEGORY.SPORTS:
      return 'スポーツ';
    case CATEGORY.LIFE:
      return 'ライフ';
    case CATEGORY.LIFE_BEAUTY:
      return '美容';
    case CATEGORY.LIFE_HEALTH:
      return '健康';
    case CATEGORY.LIFE_LIVING:
      return '暮らし';
    case CATEGORY.LIFE_GOURMET:
      return 'グルメ';
    case CATEGORY.REGION:
      return '地域';
    case CATEGORY.COLUMN:
      return 'コラム';
    case CATEGORY.FORTUNE:
      return '占い';
    default:
  }
  throw new Error(`ハンドリングされていない値です。value: ${value}`);
}

export const existsCategory = (value: string | Category) =>
  categories.includes(value as Category);

export const extractRelatedCategories = (value: string): Category[] => categories.filter(c => value.includes(c));
