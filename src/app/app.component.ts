import {Component} from '@angular/core';
import {Product} from "./models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';


  products = [
    new Product(0, 'Cat 1', 600, 'http://1.bp.blogspot.com/-CPqsoeUgDmY/UZuJ0rVx3TI/AAAAAAAAAf0/dpx1ryJ-kGA/s640/Baby-Cute-Cat-Wallpaper.jpg', true, ['cute', 'cat']),
    new Product(1, 'Cat 2', 500, 'http://thewallpapershd.com/wp-content/uploads/2017/01/Beautiful-White-Cat-Wallpaper-640x480.jpg', true, ['funny', 'cat']),
    new Product(2, 'Cat 3', 800, 'http://pixcorners.com/wp-content/uploads/2017/01/Beautiful-Cute-Cat-Wallpaper-640x480.jpg', false, ['dummy', 'cat'])
  ];

  promotedProducts = this.products.filter(p => p.isPromoted);

}
