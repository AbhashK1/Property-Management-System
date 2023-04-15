import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit{
  constructor(
    public grid:MatGridListModule
  ){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
