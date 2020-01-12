import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public cat: string = "https://icatcare.org/app/uploads/2018/09/Scottish-fold.png";
  public Piesang: string = "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/81527090_2762292347164615_5883537735850917888_n.jpg?_nc_cat=103&_nc_ohc=xxQuuyxf0h4AQnxzYLZpa1ed_D2vYfbToE-zqAS1UJNtyY9Z5VBchhllw&_nc_ht=scontent-jnb1-1.xx&oh=5368ac189bd1709e9c8e867b1f85c2a9&oe=5E9AD7CE";
  constructor() { }

  ngOnInit() {  
  }

}
