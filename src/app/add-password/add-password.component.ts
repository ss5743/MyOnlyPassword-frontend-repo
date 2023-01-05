import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'add-password',
  templateUrl: './add-password.component.html',
  styleUrls: ['./add-password.component.css']
})
export class AddPasswordComponent {

  url:any= 'http://localhost:8080/passwords';

  constructor(private http: HttpClient){

  }
  //x = document.getElementById("url-pass");
  //console.log(x);
  
  submit(data:any,values:NgForm){
    //console.log(x)
    

    this.http.post(this.url,data).subscribe((data)=>{
      //console.log(data)
    })

    values.reset();
    // let passSaver:any = document.getElementById("h4")?.innerHTML;
    // passSaver="Password saved";
  }

  showPass(){
    var x:any= document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    //console.log(x);
  }

   //submit(f: any){ console.log(f)  }

   savePassword(){
      
   }
}