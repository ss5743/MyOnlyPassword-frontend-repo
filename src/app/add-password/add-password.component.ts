import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'add-password',
  templateUrl: './add-password.component.html',
  styleUrls: ['./add-password.component.css']
})
export class AddPasswordComponent {

  url:any= 'http://localhost:8080/passwords';

  constructor(private http: HttpClient,private api:ApiService){}
  
  submit(data:any,values:NgForm){
    this.api.addPass(data).subscribe()
    values.reset();
    }

  showPassVisible(){
    var x:any= document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
   savePassword(){
    //display span to tell password saved in future
   }
}