import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent implements OnInit {
  expertises: any;

  constructor(private getData: ServicesService) { }

  ngOnInit(): void {
    this.getData.getdata().subscribe(data => {
      console.log(data.expertise);      
      this.expertises = data.expertise;
    });
  }

}
