import {RestService} from "./rest.service";
import {Observable} from "rxjs";
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
        return this._restService.restPOST('/user', data).pipe();
    }
}
