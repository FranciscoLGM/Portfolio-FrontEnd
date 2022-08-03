import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations: any;

  constructor(private getData: ServicesService) { }

  ngOnInit(): void {
    this.getData.getdata().subscribe(data => {
      console.log(data.education);      
      this.educations = data.education;
    });
  }

}
