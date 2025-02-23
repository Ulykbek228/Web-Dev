import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() removeProduct = new EventEmitter<Product>();

  likeProduct() {
    this.product.likes++;
  }

  remove() {
    this.removeProduct.emit(this.product);
  }

  nextImage() {
    if (this.product.currentImageIndex < this.product.images.length - 1) {
      this.product.currentImageIndex++; //  перелистываем вперёд
    } else {
      this.product.currentImageIndex = 0; //  если конец массива — возвращаемся к началу
    }
  }

  prevImage() {
    if (this.product.currentImageIndex > 0) {
      this.product.currentImageIndex--; //  перелистываем назад
    } else {
      this.product.currentImageIndex = this.product.images.length - 1; //  если начало — идём в конец массива
    }
  }
  openWhatsApp() {
    const phoneNumber = '1234567890'; //  замените на реальный номер
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank'); //  открывает WhatsApp в новом окне
  }
  
  openTelegram() {
    const username = 'username'; //  замените на реальный username
    const url = `https://t.me/${username}`;
    window.open(url, '_blank'); //  открывает Telegram в новом окне
  }
  
}

