import { Component, VERSION } from '@angular/core';
import {Employee} from './emp';
@Component({
  selector: 'my-app',
 template:`<h1 appHighlighter> Hi {{name}} <br/> {{num}} </h1> <br/>
  <li  *ngFor='let e of emp' >{{e.name}}</li>`
})
export class AppComponent  {
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
