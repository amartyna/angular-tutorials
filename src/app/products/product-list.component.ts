import { Component } from '@angular/core';

@Component ({
    selector: "pm-products",
    templateUrl: './product-list.component.html'
})

export class ProductListComponent {
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'cart';
    products: any[] = [
    {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
            "imageUrl": "https://cdn2.iconfinder.com/data/icons/Qetto___icons_by_ampeross-d4njobq/256/jpg.png"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "https://cdn2.iconfinder.com/data/icons/Qetto___icons_by_ampeross-d4njobq/256/jpg.png"
    }
    ];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}