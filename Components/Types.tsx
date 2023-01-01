export interface State {
  cart: {
    reduce(arg0: (accumulator: any, item: any) => any, arg1: number): unknown;
    map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
    length: number;
    items: string[],
  },
  user: {
    name: string,
  },
}


export interface Data {
  id: number,
  name: string,
  category: string,
  image: string,
  price: number
}