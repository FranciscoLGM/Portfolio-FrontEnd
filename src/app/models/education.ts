export class Education {
    id?: number;
    degree: string;
    university: string;
    inicio: string;
    fin: string;
    city: string;
    description: string;
    imageUniversity: string;

    constructor(
        degree: string,
        university: string,
        inicio: string,
        fin: string,
        city: string,
        description: string,
        imageUniversity: string
    ) {
        this.degree = degree;
        this.university = university;
        this.inicio = inicio;
        this.fin = fin;
        this.city = city;
        this.description = description;
        this.imageUniversity = imageUniversity;
    }
}
