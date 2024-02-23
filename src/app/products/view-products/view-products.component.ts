import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { Product } from '../product';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  productId = 0;
  productDetails: Product;
  constructor(private activatedRoute: ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id;
    });
    this.productsService.viewProduct(this.productId).subscribe(productData => {
      this.productDetails = productData;
    });
  
  }
}
