import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Contact } from 'src/app/models/contact';
import { FormService } from 'src/app/services/form.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
    contactForm: FormGroup;
    reggaxPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    isLogged = false;

    constructor(
        private contactFormService: FormService,
        private formBuilder: FormBuilder,
        private toastr: ToastrService,
        private tokenService: TokenService
    ) {
        this.contactForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.pattern(this.reggaxPattern)],
            message: ['', Validators.required],
            _honey: [''],
            _subject: ['New submission!'],
            _template: ['table'],
        });
    }

    ngOnInit(): void {
        if (this.tokenService.getToken()) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }
    }

    postFormData() {
        const contact: Contact = {
            name: this.contactForm.get('name')?.value,
            email: this.contactForm.get('email')?.value,
            message: this.contactForm.get('message')?.value,
            _honey: this.contactForm.get('_honey')?.value,
            _subject: this.contactForm.get('_subject')?.value,
            _template: this.contactForm.get('_template')?.value,
        };

        this.contactFormService.postForm(contact).subscribe({
            next: (data) => {
                this.toastr.info('¡Mensaje enviado correctamente!');
                this.contactForm.reset();
            },
            error: (err) => {
                this.toastr.error('Error al enviar el mensaje');
                console.error(err);
            },
        });
    }
}
