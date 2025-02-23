import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule, ProductItemComponent]
})
export class ProductListComponent {
  @Input() products!: Product[];

  removeProduct(productToRemove: Product) {
    this.products = this.products.filter(product => product.id !== productToRemove.id); // ✅ удаляем товар из списка
  }
}
