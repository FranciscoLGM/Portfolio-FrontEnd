import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mydata:any;

  constructor(private getdata:ServicesService) { }

  ngOnInit(): void {
    this.getdata.getdata().subscribe(data=>{
      console.log(data);
      this.mydata=data;
    });
  }

}
