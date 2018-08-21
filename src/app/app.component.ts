

import { Component } from '@angular/core';
import {RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BTA';
}





document.onreadystatechange=function(){
  if(document.readyState==="complete"){
    
    var radio_button1=document.getElementById("radio1");
    var radio_button2=document.getElementById("radio2");
    var arrival=<HTMLInputElement>document.getElementById("arrival");
   
    radio_button1.addEventListener("click",function(){
      arrival.disabled=true;
    });
      radio_button2.addEventListener("click",function(){
        arrival.disabled=false; 
        
    });

    
  }
}

