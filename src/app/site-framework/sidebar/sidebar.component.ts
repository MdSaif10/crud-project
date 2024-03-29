import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { Category } from '../category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
categoryList: Category;
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getCategories().subscribe(data => {
      this.categoryList = data;
    })
  }

}
