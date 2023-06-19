import {Injectable} from "@angular/core"
import { Product } from "./product.model"

@Injectable()
export class Cart{
    public lines: CartLine[] = []
    public itemCount: number = 0
    public cartPrice: number = 0

    addLine(product: Product, quantity: number = 1){
        //czy produkt już istnieje w koszyku
        let line = this.lines.find(line => line.product.id == product.id)
        if(line != undefined){
            line.quantity+=quantity; //jak tak to zwiększamy ilość
        }else{
            this.lines.push(new CartLine(product, quantity)) // jak nie to tworzymy nową pozycje
        }
        this.recalucalte()
    }

    updateQuantity(product: Product, quantity:number){
        let line = this.lines.find(line => line.product.id == product.id)
        if(line != undefined){
            line.quantity+=quantity; //jak tak to zwiększamy ilość
        }
        this.recalucalte();

    }

    removeLine(id:number){
        let index = this.lines.findIndex(line => line.product.id == id)
        this.lines.splice(index, 1);
    }

    clear(){
        this.lines = []
        this.itemCount = 0
        this.cartPrice = 0
    }

    private recalucalte(){
        this.itemCount = 0
        this.cartPrice = 0
        this.lines.forEach(l => {
            this.itemCount += l.quantity
            this.cartPrice += l.lineTotal
        })
    }
}

export class CartLine{
    constructor(public product: Product, public quantity:number){}

    get lineTotal(){
        return this.quantity * (this.product.price ?? 0)
    }
}