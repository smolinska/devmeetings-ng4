export class Product {
  static excluded = ['id','img','isPromoted'];

  constructor(public id: number,
              public name: string,
              public price = 0,
              public img: string,
              public isPromoted = false,
              public tags = []) {
  }
}
