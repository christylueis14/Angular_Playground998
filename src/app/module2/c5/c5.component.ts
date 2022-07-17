import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/Services/validators.service';
import { M2serviceService } from '../m2service.service';
import { Users } from '../Model/userModel';

@Component({
  selector: 'app-c5',
  templateUrl: './c5.component.html',
  styleUrls: ['./c5.component.scss']
})
export class C5Component implements OnInit {
  users: Users[] = [];

 userForm=new FormGroup({
   name:new FormControl('',[Validators.required]),
   username:new FormControl(''),
   email:new FormControl(''),
   website:new FormControl(''),
   tel:new FormControl('',Validators.compose([this.validatorsService.patternValidator()])),

 });
 hide = true;
  constructor(private service: M2serviceService,private formBuilder: FormBuilder,private validatorsService:ValidatorsService) { }

  ngOnInit(): void {
   this.users= this.service.getdata;
   this.userForm.patchValue({

    name:this.users[0].name,
    username:this.users[0].username,
    email:this.users[0].email,
    website:this.users[0].website,
   // name:this.users[0].name,
   })

  this.userForm.valueChanges.subscribe(x => {
    if(this.userForm.valid)
    {
console.log("true");

    }
    else{
      console.log("false");

    }
  
})

  }


}

