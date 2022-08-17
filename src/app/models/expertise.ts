export class Expertise {
    id?: number;
    position: string;
    company: string;
    inicio: string;
    fin: string;
    city: string;
    description: string;
    imageCompany: string;

    constructor(
        position: string,
        company: string,
        inicio: string,
        fin: string,
        city: string,
        description: string,
        imageCompany: string
    ) {
        this.position = position;
        this.company = company;
        this.inicio = inicio;
        this.fin = fin;
        this.city = city;
        this.description = description;
        this.imageCompany = imageCompany;
    }
}
