export class Product {
    id: number;                     // Unique identifier for the product
    name: string;                   // Name of the product
    description: string;            // Description of the product
    brand: string;                  // Brand name of the product
    genderCategory: string;         // Gender category (e.g., Unisex, Men, Women)
    size: string;                   // Size of the product
    color: string;                  // Color of the product
    price: number;                  // Regular price of the product
    discountPrice?: number;         // Optional field: Discounted price, if any
    isInInventory: boolean;         // Inventory status (true if available, false otherwise)
    itemsLeft: number;              // Number of items left in stock
    imageURL: string;               // URL for the product image
    slug: string;                   // Slug for product URL or routing purposes
}
