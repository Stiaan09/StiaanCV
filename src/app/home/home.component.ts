import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  public cat: string = "https://icatcare.org/app/uploads/2018/09/Scottish-fold.png";
  public Piesang: string = "https://media-exp2.licdn.com/dms/image/C4D03AQHfxqSb9Z-gjw/profile-displayphoto-shrink_200_200/0?e=1584576000&v=beta&t=Hc9kgcDnGANxq6huiiBfE7mruRBOAUD188QJcFZoAec";
  constructor() { }

  ngOnInit() {
  }

  Stiaan:string="assets/Images/PFP.jpg";



}
// @Component({
//   selector:'menu-overview-example',
//   templateUrl:'menu-overview-example.html',
//   styleUrls:['menu-overview-example.css'],
// })
// export class MenuOverviewExample{}
