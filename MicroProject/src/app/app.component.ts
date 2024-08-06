import { Component, OnInit } from '@angular/core';
import { Bakery } from './model/bakery';
import { BakeryService } from './bakery.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent{
  bakery : Bakery;
  result : string;
  bakeryArr : Bakery[] = [
    {
      "id": "101",
      "name": "Laddoo",
      "Dis": "Laddoo is very sweet",
      "aval": "10",
      "quan": "4",
      "price": "$5"
    },
    {
      "id": "102",
      "name": "Bread",
      "Dis": "Bread",
      "aval": "10",
      "quan": "4",
      "price": "$5"
    },
    {
      "id": "103",
      "name": "GulabJam",
      "Dis": "GulabJam is very sweet",
      "aval": "15",
      "quan": "2",
      "price": "$10"
    }
  ]
  id1 : string;
  name1 : string;
  Dis1 : string;
  aval1 : string;
  quan1 : string;
  price1 : string;
  flag : boolean;

  constructor(private service : BakeryService){
    this.bakery = new Bakery();
    this.result = "";
    this.flag = false;

    this.bakeryArr = [
      // {
      //   "id": "101",
      //   "name": "Laddoo",
      //   "Dis": "Laddoo is very sweet",
      //   "aval": "10",
      //   "quan": "4",
      //   "price": "$5"
      // },
      // {
      //   "id": "102",
      //   "name": "Bread",
      //   "Dis": "Bread",
      //   "aval": "10",
      //   "quan": "4",
      //   "price": "$5"
      // },
      // {
      //   "id": "103",
      //   "name": "GulabJam",
      //   "Dis": "GulabJam is very sweet",
      //   "aval": "15",
      //   "quan": "2",
      //   "price": "$10"
      // },
      // this.bakery
    ];
    this.id1 = "";
    this.name1 = "";
    this.Dis1 =  "";
    this.aval1 = "";
    this.quan1 = "";
    this.price1 = "";
  }
 
  addcart(data : any){
    this.bakery.id = data.id;
    this.bakery.name = data.name;
    this.bakery.Dis = data.Dis;
    this.bakery.aval = data.aval;
    this.bakery.quan = data.quan;
    this.bakery.price = data.price;
    this.result = this.service.addcart(this.bakery);
    this.clearcart()
  }

  updatecart(data : any){
    this.bakery.id = data.id;
    this.bakery.name = data.name;
    this.bakery.Dis = data.Dis;
    this.bakery.aval = data.aval;
    this.bakery.quan = data.quan;
    this.bakery.price = data.price;
    this.result = this.service.updatecart(this.bakery);
    this.clearcart();
  }

  deletecart(data : any){
    this.result = this.service.deletecart(data.id);
    this.clearcart()
  }

  clearcart(){
    this.id1 = " ";
    this.name1 = " ";
    this.Dis1 = " ";
    this.aval1 = " ";
    this.quan1 = " ";
    this.price1 = " ";
  }

  displaycart(){
    this.bakeryArr = this.service.displaycart();
    this.flag = true;
  }
}
