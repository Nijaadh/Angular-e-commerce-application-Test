import { Component, Input } from '@angular/core';
import { Product } from '../../Models/product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.scss'
})
export class ProductlistComponent {
  selectedProduct: Product;
  products = [
    { 
      id: 1, name: "Classic T-Shirt", description: "Soft cotton t-shirt", brand: "Brand A", 
      genderCategory: "Unisex", size: "M", color: "Blue", price: 1950, 
      discountPrice: 235, isInInventory: true, itemsLeft: 50, 
      imageURL: "https://th.bing.com/th/id/OIP.DSjZPk9uy01_f2ox4Q5QPgAAAA?rs=1&pid=ImgDetMain", slug: "classic-t-shirt"
    },
    { 
      id: 2, name: "Running Shoes", description: "Lightweight running shoes", brand: "Brand B", 
      genderCategory: "Men", size: "10", color: "Black", price: 775, 
      isInInventory: true, itemsLeft: 20, 
      imageURL: "https://via.placeholder.com/300x400?text=Product+Image+1", slug: "running-shoes"
    },
    { 
      id: 3, name: "Leather Wallet", description: "Premium leather wallet", brand: "Brand C", 
      genderCategory: "Men", size: "One Size", color: "Brown", price: 3400, 
      discountPrice: 560, isInInventory: false, itemsLeft: 0, 
      imageURL: "https://th.bing.com/th/id/R.93525cdd3f6c51b9ce6bfb3751537d1e?rik=pZ8Ti%2bfT51EO%2bQ&riu=http%3a%2f%2fimage.sportsmansguide.com%2fadimgs%2fl%2f1%2f184655_ts.jpg&ehk=8017rAnQYB6JWqdtbH4CrfA2cs2a%2fAIMrTbm7y3GHAU%3d&risl=&pid=ImgRaw&r=0", slug: "leather-wallet"
    },
    { 
      id: 4, name: "Summer Dress", description: "Floral print summer dress", brand: "Brand D", 
      genderCategory: "Women", size: "L", color: "Yellow", price: 995, 
      discountPrice: 230, isInInventory: true, itemsLeft: 10, 
      imageURL: "https://i5.walmartimages.com/asr/56258952-50c5-4cd5-a33a-3ad3ee4bb532_1.ea94bd2cbf6631611bde7801b3e29503.jpeg", slug: "summer-dress"
    },
    { 
      id: 5, name: "Backpack", description: "Durable travel backpack", brand: "Brand E", 
      genderCategory: "Unisex", size: "Large", color: "Grey", price: 670, 
      isInInventory: true, itemsLeft: 100, 
      imageURL: "https://i5.walmartimages.com/asr/9afc95e4-f963-4f1f-895f-996853436cb0_2.7aa1f16fc92a48e46c93b009c649fe10.jpeg", slug: "backpack"
    },
    { 
      id: 6, name: "Jeans", description: "Comfort fit denim jeans", brand: "Brand F", 
      genderCategory: "Women", size: "28", color: "Dark Blue", price: 795, 
      discountPrice: 125, isInInventory: true, itemsLeft: 15, 
      imageURL: "https://th.bing.com/th/id/OIP.UVT3Cbn6wLEU8FV633RIKwHaKu?rs=1&pid=ImgDetMain", slug: "jeans"
    },
    { 
      id: 7, name: "Baseball Cap", description: "Adjustable cap", brand: "Brand G", 
      genderCategory: "Unisex", size: "One Size", color: "Red", price: 5300, 
      isInInventory: true, itemsLeft: 75, 
      imageURL: "https://th.bing.com/th/id/OIP.IVs1dsiSV-yNx_qrG4o4sAHaHa?rs=1&pid=ImgDetMain", slug: "baseball-cap"
    },
    { 
      id: 8, name: "Sports Watch", description: "Water-resistant sports watch", brand: "Brand H", 
      genderCategory: "Men", size: "One Size", color: "Black", price: 7400, 
      discountPrice: 2300, isInInventory: false, itemsLeft: 0, 
      imageURL: "https://th.bing.com/th/id/R.5826065c5122901fea8e9d36ac96f69d?rik=p8gHRuLe39brMA&pid=ImgRaw&r=0", slug: "sports-watch"
    },
    { 
      id: 9, name: "Sneakers", description: "Casual sneakers", brand: "Brand I", 
      genderCategory: "Women", size: "7", color: "White", price: 6200, 
      discountPrice: 3125, isInInventory: true, itemsLeft: 25, 
      imageURL: "https://th.bing.com/th/id/OIP.QAKLCooEQXfJZ-mro3gXAwAAAA?rs=1&pid=ImgDetMain", slug: "sneakers"
    },
    { 
      id: 10, name: "Wool Scarf", description: "Warm woolen scarf", brand: "Brand J", 
      genderCategory: "Unisex", size: "One Size", color: "Green", price: 6000, 
      isInInventory: true, itemsLeft: 30, 
      imageURL: "https://th.bing.com/th/id/OIP.SHacHZqlGdQTCvRy_hXUSQHaIi?rs=1&pid=ImgDetMain", slug: "wool-scarf"
    },
    { 
      id: 11, name: "Denim Jacket", description: "Classic denim jacket", brand: "Brand K", 
      genderCategory: "Men", size: "L", color: "Blue", price: 8000, 
      discountPrice: 1200, isInInventory: false, itemsLeft: 0, 
      imageURL: "https://th.bing.com/th/id/OIP.AcgqaVfdkojtxuKvdMgyoQHaJ4?rs=1&pid=ImgDetMain", slug: "denim-jacket"
    },
    { 
      id: 12, name: "Sunglasses", description: "Polarized sunglasses", brand: "Brand L", 
      genderCategory: "Unisex", size: "One Size", color: "Black", price: 4000, 
      discountPrice: 880, isInInventory: true, itemsLeft: 40, 
      imageURL: "https://cdn.shopify.com/s/files/1/0193/6253/products/269519403_2000x.jpg?v=1549677619", slug: "sunglasses"
    },
    { 
      id: 13, name: "Yoga Pants", description: "Stretchable yoga pants", brand: "Brand M", 
      genderCategory: "Women", size: "M", color: "Purple", price: 4000, 
      isInInventory: true, itemsLeft: 60, 
      imageURL: "https://th.bing.com/th/id/R.47380328a927c3f1eff499682ecc7632?rik=aYgg2PPKNyJ%2fDw&pid=ImgRaw&r=0", slug: "yoga-pants"
    },
    { 
      id: 14, name: "Leather Belt", description: "Genuine leather belt", brand: "Brand N", 
      genderCategory: "Men", size: "L", color: "Brown", price: 3000, 
      discountPrice: 320, isInInventory: true, itemsLeft: 20, 
      imageURL: "https://th.bing.com/th/id/OIP.opcAEyKOfwlmjTqw6YfgvwHaHa?rs=1&pid=ImgDetMain", slug: "leather-belt"
    },
    { 
      id: 15, name: "High Heels", description: "Stylish high heels", brand: "Brand O", 
      genderCategory: "Women", size: "8", color: "Black", price: 1500, 
      discountPrice: 270, isInInventory: true, itemsLeft: 12, 
      imageURL: "https://cdnc.lystit.com/photos/6e6a-2015/11/05/river-island-black-black-lace-up-platform-heels-product-0-295819667-normal.jpeg", slug: "high-heels"
    }
  ];
  
  totalProductCount=this.products.length;
  totalProductsInStock=this.products.filter(p => p.isInInventory===true).length;
  totalProductsInOutOfStock=this.products.filter(p => !(p.isInInventory)).length;

  selctedRadioButton:string='all';
  onfilterChange(vlue:string){
    // console.log("onfilterChange occurred");
    this.selctedRadioButton=vlue;

    // console.log(this.selctedRadioButton);
  }

  @Input()
  searchtext:string='';

  
}
