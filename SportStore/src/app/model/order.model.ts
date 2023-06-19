import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

@Injectable()
export class Order{
    public id?: number
    public name?: string
    public adress?: string
    public city?: string
    public zip?: string
    public country?: string
    public shipped: boolean = false

    constructor(public cart:Cart){}
    clear(){
        this.id = undefined
        this.name = this.adress = this.city = undefined
        this.zip = this.country = undefined
        this.shipped = false
        this.cart.clear()
    }
}