import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productsService: ProductsService ) { }

  ngOnInit() {
  }
    addNewProduct(form){
      console.log(form.value);

      let newProduct = {
        id:13,
        categoryId: form.value.product_category,
        productName: form.value.product_name,
        description: form.value.product_description,
        rating: form.value.product_rating,
        price: form.value.product_price,
        productImg: '',
        isAvailable: form.value.product_available,
        color: form.value.product_color,
        reviews: form.value.product_reviews,
      };
      console.log(newProduct);
      
      this.productsService.createProduct(newProduct).subscribe(data => {
       console.log(data);
      });
    }
}
