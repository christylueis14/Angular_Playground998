import { Component, OnInit } from '@angular/core';
import { M2serviceService } from '../m2service.service';
import { Users } from '../Model/userModel';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.scss']
})
export class C4Component implements OnInit {
  users: Users[] = [];
  constructor(private service: M2serviceService) { }
  dataa: string = '';
  flag: boolean = true;
  ngOnInit(): void {
    this.service.getuserdata().subscribe(data => {
      this.users = JSON.parse(JSON.stringify(data));
      this.service.setdata(this.users);
    })
  }

  onFileUpload(event:any)
  {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        console.log(reader.result);
    };
  }
  checkboxchange(check:any){
   
    this.flag=!check;
  }
}
