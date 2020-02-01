export interface IProfile {
  categories: {category: string}[];
  catNotNulls: {id:number, name: string, category: string}[];
  catNulls: {id: number, name: string}[];
}
