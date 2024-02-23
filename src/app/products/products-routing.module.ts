import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { ProductsComponent } from "./products.component";
import { CreateProductComponent } from "./create-product/create-product.component";
import { DeleteProductComponent } from "./delete-product/delete-product.component";
import { UpdateProductComponent } from "./update-product/update-product.component";
import { ViewAllProductComponent } from "./view-all-product/view-all-product.component";
import { ViewAllProductByDateComponent } from "./view-all-product-by-date/view-all-product-by-date.component";
import { ViewProductsComponent } from "./view-products/view-products.component";
import { ViewAllProductByCategoryComponent } from "./view-all-product-by-category/view-all-product-by-category.component";

const routes: Routes = [
    {
        path: '',
        component: ViewAllProductComponent
    },
    // {
    //     path: 'product',
    //     component: ProductsComponent
    // },
    {
        path: 'create-product',
        component: CreateProductComponent
    },
    {
        path: 'delete-product/:id',
        component: DeleteProductComponent
    },
    {
        path: 'update-product/:id',
        component: UpdateProductComponent
    },
    {
        path: 'product/:id',
        component: ViewProductsComponent
    },
    {
        path: 'list-products',
        component: ViewAllProductComponent
    },
    {
        path: 'category/:id',
        component: ViewAllProductByCategoryComponent
    },
    {
        path: 'search-date',
        component:ViewAllProductByDateComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductsRoutingModule{

}