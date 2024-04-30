import {Component, ViewEncapsulation} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
    selector: 'app-main-page',
    standalone: true,
    imports: [HeaderComponent, FooterComponent],
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.scss',
    encapsulation: ViewEncapsulation.None,
    host: {
      class: 'wrapper main'
    }
})
export class MainPageComponent {

}
