import { Component, OnInit, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   this.forScroll()
  }

  forScroll() {
    // b: window.screen.height;
    var a= document.body.scrollHeight
    
    
   
   window.scrollTo(0, a);
 
   
   }
}
