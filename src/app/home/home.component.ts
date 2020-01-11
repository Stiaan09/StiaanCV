import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public cat: string = "https://icatcare.org/app/uploads/2018/09/Scottish-fold.png";
  public Piesang: string = "https://icatcare.org/app/uploads/2018/09/Scottish-fold.png";
  constructor() { }

  ngOnInit() {
  }

}
