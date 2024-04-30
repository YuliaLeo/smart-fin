import {RestService} from "./rest.service";
import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class RegistrationService {
    constructor(
        private _restService: RestService
    ) {
    }

    public register(data: any): Observable<any> {
        return of([]);
        // return this._restService.restPOST('/public/register', data).pipe(
        // );
    }
}
