import {Injectable} from "@angular/core";
import {HttpClient, HttpContext, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

const SERVER_API = 'http://127.0.0.1:8000/api';

@Injectable({
    providedIn: 'root'
})
export class RestService {
    constructor(
        private _http: HttpClient
    ) {
    }

    public restGET<T = any>(endpoint: string, params: any = {}): Observable<T> {
        return this.request('GET', endpoint, {
            params: new HttpParams({
                fromObject: params
            })
        });
    }

    public restPOST<T = any>(endpoint: string, body: object | null = null): Observable<T> {
        return this.request('POST', endpoint, { body });
    }

    public restPUT<T = any>(endpoint: string, body: object | null = null): Observable<T> {
        return this.request('PUT', endpoint, { body });
    }

    public restDELETE<T = any>(endpoint: string, body: object | null = null): Observable<T> {
        return this.request('DELETE', endpoint, { body });
    }

    public request<T>(method: string, endpoint: string, options: HttpOptions): Observable<T> {
        const preparedOptions = options;

        const context = new HttpContext();

        const httpOptions: HttpOptions = {
            ...preparedOptions,
            context,
        };

        return this._http.request(method, SERVER_API + endpoint, httpOptions);
    }
}

interface HttpOptions {
    body?: any;
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    context?: HttpContext;
    observe?: 'body' | 'response';
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    responseType?: 'json' | 'blob';
    reportProgress?: boolean;
    withCredentials?: boolean;
}
