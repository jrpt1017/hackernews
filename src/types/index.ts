export interface INewsItem {
  id: number,
  type: 'job' | 'story' | 'comment' | 'poll' | 'pollopt',
  deleted?: boolean,
  url?: string
  by?: string,
  time?: number,
  dead?: boolean,
  kids?: number[],
  descendants?: number,
  score?: number,
  title?: string,
  text?: string,
}