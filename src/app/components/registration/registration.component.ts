import {Component, inject, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RegistrationService} from "../../services/registration.service";
import {Router} from "@angular/router";
import {AppRoutes} from "../../app.routes";

@Component({
    selector: 'app-registration',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './registration.component.html',
    styleUrl: './registration.component.scss',
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'registration'
    }
})
export class RegistrationComponent implements OnInit {
    public isFirstBlock = true;

    public isSecondBlock = false;

    public isThirdBlock = false;

    public isFourthBlock = false;

    public form!: FormGroup<IRegistration>;

    private _registrationService = inject(RegistrationService);

    private _router = inject(Router);

    constructor(
        private _formBuilder: FormBuilder
    ) {
    }

    public ngOnInit() {
        this.form = this._formBuilder.nonNullable.group({
            name: ['', Validators.required],
            surname: ['', Validators.required],
            phone: ['', Validators.required],
            income: [0, Validators.required]
        });
    }

    public submit() {
        const body = this.form.getRawValue();

        this._registrationService.register(body).subscribe(() => {
            this._router.navigate([AppRoutes.MainPage]);
        });
    }
}

export interface IRegistration {
    name: FormControl<string>;
    surname: FormControl<string>;
    phone: FormControl<string>;
    income: FormControl<number>;
}
