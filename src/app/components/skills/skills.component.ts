import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { portfolioService } from 'src/app/services/portfolio.service';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
    skills: Skill[] = [];

    constructor(private getSkill: portfolioService) {}

    ngOnInit(): void {
        this.getSkillData();
    }
    private getSkillData() {
        this.getSkill.getSkill().subscribe((data) => {
            // console.log(data);
            this.skills = data;
        });
    }
}
