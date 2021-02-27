
export class ProductsService {
  ProductsData = [];
  constructor() {
    this.ProductsData = [
      { CustomerName: "Madan", ProductName: "Biscuits", OrderID: "xy001" },
      { CustomerName: "Madan", ProductName: "Cakes", OrderID: "xy002" },
      { CustomerName: "Sudheer", ProductName: "Chips", OrderID: "xy003" },
      { CustomerName: "Sudheer", ProductName: "Breakfast Food", OrderID: "xy004" },
      { CustomerName: "Suresh", ProductName: "CoolDrinks", OrderID: "xy005" },
      { CustomerName: "Suresh", ProductName: "Cakes", OrderID: "xy006" },
      { CustomerName: "Suresh", ProductName: "Chips", OrderID: "xy007" }];
  }
  //http Service....
  getProducts() {
    return this.ProductsData;
  }

  GetProductsByCustomerName(CustomerName) {
    return this.ProductsData.filter((Product) => {
      return Product.CustomerName === CustomerName;
    });
  }


}
