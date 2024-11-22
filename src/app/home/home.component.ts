import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TrendingNowComponent } from "./trending-now/trending-now.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, TrendingNowComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
macBook:string = 'https://www.apple.com/newsroom/images/2024/10/new-macbook-pro/article/Apple-MacBook-Pro-M4-hero_big.jpg.large.jpg'
}
