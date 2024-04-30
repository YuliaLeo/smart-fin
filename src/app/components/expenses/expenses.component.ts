import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
    selector: 'app-expenses',
    standalone: true,
    imports: [HeaderComponent, FooterComponent, FormsModule, ReactiveFormsModule],
    templateUrl: './expenses.component.html',
    styleUrl: './expenses.component.scss',
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'wrapper'
    }
})
export class ExpensesComponent implements OnInit {
    public expenditureHistory = [
        {
            name: 'Iphone 11 pro 256 gb',
            amount: '40 000 ₽',
            date: '12.04.24',
            category: 'Электроника'
        },
        {
            name: 'Iphone 11 pro 256 gb',
            amount: '40 000 ₽',
            date: '12.04.24',
            category: 'Электроника'
        }];

    public editorMode = false;

    public selectedCategory: string = '';

    public form!: FormGroup;

    categories = ['Пищевые товары', 'Транспорт', 'Электроника', 'Одежда', 'Развлечения'];

    constructor(
        private _formBuilder: FormBuilder
    ) {
    }

    public ngOnInit() {
        this.form = this._formBuilder.nonNullable.group({
            name: ['', Validators.required],
            category: ['', Validators.required],
            date: ['', Validators.required],
            cost: [0, Validators.required]
        });
    }

    public addIncome() {
        this.editorMode = true;
    }

    public submit() {
        const body = this.form.getRawValue();
    }
}
