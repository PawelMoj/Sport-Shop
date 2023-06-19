import { Injectable } from "@angular/core"
import { Product } from "./product.model"
import { Order } from "./order.model"
import { Observable, from } from "rxjs"

@Injectable()
export class StaticDataSource{
    private products: Product[] =[
        new Product(1, "Product 1", "Category 1", "Product 1 Category 1", 100),
        new Product(2, "Product 1", "Category 2", "Product 2 Category 2", 100),
        new Product(3, "Product 1", "Category 3", "Product 3 Category 3", 120),
        new Product(4, "Product 1", "Category 4", "Product 4 Category 4", 150),
        new Product(5, "Product 1", "Category 5", "Product 5 Category 5", 110),
        new Product(6, "Product 1", "Category 6", "Product 6 Category 6", 170),
        new Product(7, "Product 1", "Category 7", "Product 7 Category 7", 109.89),
        new Product(8, "Product 1", "Category 1", "Product 1 Category 1", 100),
        new Product(9, "Product 1", "Category 2", "Product 2 Category 2", 100),
        new Product(10, "Product 1", "Category 3", "Product 3 Category 3", 120),
        new Product(11, "Product 1", "Category 4", "Product 4 Category 4", 150),
        new Product(12, "Product 1", "Category 5", "Product 5 Category 5", 110),
        new Product(13, "Product 1", "Category 6", "Product 6 Category 6", 170),
        new Product(14, "Product 1", "Category 7", "Product 7 Category 7", 109.89),
        new Product(15, "Product 1", "Category 1", "Product 1 Category 1", 100),
        new Product(16, "Product 1", "Category 2", "Product 2 Category 2", 100),
        new Product(17, "Product 1", "Category 3", "Product 3 Category 3", 120),
        new Product(18, "Product 1", "Category 4", "Product 4 Category 4", 150),
        new Product(19, "Product 1", "Category 5", "Product 5 Category 5", 110),
        new Product(20, "Product 1", "Category 6", "Product 6 Category 6", 170),
        new Product(21, "Product 1", "Category 7", "Product 7 Category 7", 109.89)
    ]

    getProducts(): Observable<Product[]> {
        return from([this.products])
    }

    saveOrder(order:Order): Observable<Order>{
        console.log(JSON.stringify(order))
        return from([order])
    }
}