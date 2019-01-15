import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  lists = Array.from({ length: 1000 }).map((_, index) => `Item ${index + (Math.random() * 10).toFixed(0)}`);
  constructor() { }

  ngOnInit() {
  }

}
