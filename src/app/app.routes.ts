import { Routes } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {GoalComponent} from "./components/goal/goal.component";
import {ExpensesComponent} from "./components/expenses/expenses.component";

export enum AppRoutes {
    Index = '',
    MainPage = 'main-page',
    Registration = 'registration',
    Goal = 'goal',
    Expenses = 'expenses'
}

export const routes: Routes = [
    {
        path: AppRoutes.MainPage,
        component: MainPageComponent,
    },
    {
        path: AppRoutes.Registration,
        component: RegistrationComponent
    },
    {
        path: AppRoutes.Goal,
        component: GoalComponent
    },
    {
        path: AppRoutes.Expenses,
        component: ExpensesComponent
    },
    {
        path: AppRoutes.Index,
        redirectTo: AppRoutes.Expenses,
        pathMatch: 'full'
    }
];
