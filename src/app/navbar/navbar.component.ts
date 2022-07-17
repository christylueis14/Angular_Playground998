import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ViewEncapsulation} from '@angular/core';
import { BasicLoaderService } from '../basic-loader.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,public loaderSrvice:BasicLoaderService) { }

  ngOnInit(): void {

  }
  onTabChange(tabevent:any)
  {
    if(tabevent.index==0)
    {
      this.router.navigate(['m2']);
    }
    else if(tabevent.index==1)
    {
      this.router.navigate(['m3']);
    }
    else if(tabevent.index==2)
    {
      this.router.navigate(['m4']);
    }
   

  }
}
