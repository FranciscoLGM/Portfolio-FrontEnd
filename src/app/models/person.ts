export class Person {
    id?: number;
    name: string;
    lastname: string;
    profession: string;
    occupation: string;
    heroDescription: string;
    aboutDescription: string;
    imageProfile: string;

    constructor(
        name: string,
        lastName: string,
        profession: string,
        occupation: string,
        heroDescription: string,
        aboutDescription: string,
        imageProfile: string
    ) {
        this.name = name;
        this.lastname = lastName;
        this.profession = profession;
        this.occupation = occupation;
        this.heroDescription = heroDescription;
        this.aboutDescription = aboutDescription;
        this.imageProfile = imageProfile;
    }
}
