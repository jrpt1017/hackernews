export interface INewsItem {
  id: number,
  type: 'job' | 'story' | 'comment' | 'poll' | 'pollopt',
  deleted?: boolean,
  by?: string,
  time?: number,
  dead?: boolean,
  kids?: number[],
  descendants?: number,
  score?: number,
  title?: string,
  url?: string
  text?: string,
}