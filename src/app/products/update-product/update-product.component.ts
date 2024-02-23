import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productId = 0;
  productDetails: Product;
  constructor(private activatedRoute:ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id;

 this.productsService.viewProduct(this.productId).subscribe(productData =>{
  this.productDetails = productData;
  console.log(this.productDetails);
       });
    });
  }
  updateProduct(form){
    console.log(form);

    const updateProduct = {
      id:form.value.id,
      categoryId: form.value.categoryId,
      productName: form.value.productName,
      description: form.value.description,
      rating: form.value.product_rating,
      price: form.value.price,
      productImg: '',
      isAvailable: form.value.product_available,
      color: form.value.product_color,
      reviews: form.value.product_reviews,
    };

    this.productsService.updateProduct(this.productId, form.value).subscribe(data => {
      console.log(data);
    });
  }
}
