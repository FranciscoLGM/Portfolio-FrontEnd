export class Project {
    id?: number;
    title: string;
    description: string;
    imageProject: string;
    urlProject: string;

    constructor(
        title: string,
        description: string,
        imageProject: string,
        urlProject: string
    ) {
        this.title = title;
        this.description = description;
        this.imageProject = imageProject;
        this.urlProject = urlProject;
    }
}
