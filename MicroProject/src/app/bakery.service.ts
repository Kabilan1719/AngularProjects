import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bakery } from './model/bakery';

@Injectable({
  providedIn: 'root'
})
export class BakeryService {
  url:string;
  bakeryArr : Bakery[];
  bakery : Bakery;

  constructor(private http :HttpClient) { 
    this.url = "http://localhost:3004/bakery";
    this.bakery = new Bakery();
    this.bakeryArr = [];
  }

  addcart(bakery : Bakery){
    this.http.post<Bakery>(this.url ,bakery).subscribe();
    return "Cart Added Successfully"
  }

  updatecart(bakery : Bakery){
    this.http.put<Bakery>(this.url+"/"+bakery.id,bakery).subscribe();
    return "Cart updated Successfully"
  }

  deletecart(id : number)
  {
    this.http.delete<Bakery>(this.url+"/"+id).subscribe();
    return "Cart Deleted Successfully"
  }

  displaycart(){
    this.http.get<Bakery[]>(this.url).subscribe(data => this.bakeryArr = data);
    return this.bakeryArr;
  }
}
