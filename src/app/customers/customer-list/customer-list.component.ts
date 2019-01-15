import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  lists = Array.from({ length: 1000 }).map((_, index) => `Item ${index + (Math.random() * 10).toFixed(0)}`);
  constructor() { }

  ngOnInit() {
  }

}
