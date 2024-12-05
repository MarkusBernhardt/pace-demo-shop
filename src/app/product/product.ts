export class Product {
    price: number;
    name: string;
    imageUrl: string;
    constructor(price: number, name: string, image: string) {
        this.price = price;
        this.name = name;
        this.imageUrl = image;
    }
}
