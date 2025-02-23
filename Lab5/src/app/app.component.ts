import { Component } from '@angular/core';
import { CATEGORIES } from './data/categories';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
type CategoryKey = keyof typeof CATEGORIES; // ✅ теперь TypeScript понимает ключи объекта

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule,ProductListComponent]
})
export class AppComponent {
  categories: CategoryKey[] = Object.keys(CATEGORIES) as CategoryKey[];
  selectedCategory: CategoryKey | null = null; // ✅ теперь переменная понимает, какие значения может принимать

  selectCategory(category: CategoryKey) {
    this.selectedCategory = category;
  }

  getProducts() {
    return this.selectedCategory ? CATEGORIES[this.selectedCategory] : [];
  }
}
