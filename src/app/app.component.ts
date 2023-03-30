import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}
)
export class AppComponent {
  title = 'ThePerfectPair';

  w3_open() {
    document.getElementById("mySidebar").style.display = "block";}
    
   w3_close() {
      document.getElementById("mySidebar").style.display = "none";
    }
 }

