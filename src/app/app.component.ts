import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from './_helpers/must.match.validator';

@Component({ selector: 'app',
 templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
    registerForm: any;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            civ: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            date: ['', Validators.required],
            sit: ['', Validators.required],
            enf: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required, Validators.minLength(6)]],
            phone2: ['', [Validators.required, Validators.minLength(6)]],
            mob: ['', [Validators.required, Validators.minLength(6)]],
            addresse: ['', Validators.required],
            pays: ['', Validators.required],
            ville: ['', Validators.required],
            rue: ['', Validators.required],
            num: ['', Validators.required],
            code: ['', Validators.required],
            add: ['', Validators.required],
            mot: ['', Validators.required],
            cmnt: ['', Validators.required],
            acceptTerms: [false, Validators.requiredTrue]
        }, {
            
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}
