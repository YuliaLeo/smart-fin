import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
    selector: 'app-goal',
    standalone: true,
    imports: [HeaderComponent, FooterComponent],
    templateUrl: './goal.component.html',
    styleUrl: './goal.component.scss',
    host: {
      class: 'wrapper'
    }
})
export class GoalComponent {
    public expenses = [
        {
            name: "Транспорт",
            planned: "50 000 P",
            spent: "50 000 P",
            diff: "0 P"
        },
        {
            name: "Транспорт",
            planned: "50 000 P",
            spent: "50 000 P",
            diff: "0 P"
        },
        {
            name: "Транспорт",
            planned: "50 000 P",
            spent: "50 000 P",
            diff: "0 P"
        },
    ];
}
