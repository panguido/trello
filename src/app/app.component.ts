import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor(private dragulaService: DragulaService){
   	dragulaService.setOptions('bag-task1',{
       cut :true
     });
   }
}
