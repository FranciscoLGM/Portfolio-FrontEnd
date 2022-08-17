export class Skill {
    id?: number;
    skill: string;
    rate: string;

    constructor(skill: string, rate: string) {
        this.skill = skill;
        this.rate = rate;
    }
}
