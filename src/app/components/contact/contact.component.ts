import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Contact } from 'src/app/models/contact';
import { FormService } from 'src/app/services/form.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
    contactForm: FormGroup;

    constructor(
        private contactFormService: FormService,
        private formBuilder: FormBuilder,
        private toastr: ToastrService
    ) {
        this.contactForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            message: ['', Validators.required],
        });
    }

    ngOnInit(): void {}

    postFormData() {
        const contact: Contact = {
            name: this.contactForm.get('name')?.value,
            email: this.contactForm.get('email')?.value,
            message: this.contactForm.get('message')?.value,
        };

        this.contactFormService.postForm(contact).subscribe({
            next: (data) => {
                this.toastr.info(
                    'Muchas gracias por tu mensaje',
                    'Mensaje enviado!'
                );
                this.contactForm.reset();
            },
            error: (err) => {
                this.toastr.error('Error al enviar el mensaje');
                console.error(err);
            },
        });
    }
}
