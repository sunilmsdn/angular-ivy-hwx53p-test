import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
 template:`<h1> Hi {{name}} <br/> {{num}}</h1>
  <input type="text" [value]='num'/>`
})
export class AppComponent  {
  name:string="sunil";
  num:Number=30;
}
