import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
   angForm : FormGroup;

  ngOnInit(){
    this.angForm = new FormGroup({
      name : new FormControl('',[Validators.required, Validators.minLength(5)]),
      pass : new FormControl('',Validators.required)
     
    })
  }  
   onSubmit(){
      alert(this.angForm.value.name+"  "+this.angForm.value.pass+"  ");
    }
}
