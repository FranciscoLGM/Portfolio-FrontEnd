export class Contact {
    name: string;
    email: string;
    message: string;
    _honey: string;
    _subject: string;
    _template: string;

    constructor(
        name: string,
        email: string,
        message: string,
        _honey: string,
        _subject: string,
        _template: string
    ) {
        this.name = name;
        this.email = email;
        this.message = message;
        this._honey = _honey;
        this._subject = _subject;
        this._template = _template;
    }
}
