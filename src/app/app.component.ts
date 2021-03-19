import { Component, VERSION } from '@angular/core';
import {Employee} from './emp';
@Component({
  selector: 'my-app',
 templateUrl:`app.component.html`
})
export class AppComponent  {
  title:string="my bilt in pipe example";
  todaDate:Date =new Date();
  oldDate: any=new Date("March 12,2021 10:20:20");
  numArra:number[]=[1,2,3,4,5,6,7,8,9,0];
  name:string="sunil";
  num:Number=30;

  emp:Employee[]=[{

    name:"Sunil",
    id:1
  },
   {

    name:"Anu",
    id:2
  },
  {

    name:"Saanvi",
    id:3
  }
  ]
}
