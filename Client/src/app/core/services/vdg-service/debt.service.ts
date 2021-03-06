import { Injectable } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { TableState } from 'src/app/shared/widgets/table-advanced/table-advanced.model';
import { Ns } from 'src/app/pages/apps/ns/models/ns';
import { CookieService } from './cookie.service';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class DebtService {

    href = environment.base_url;
    apiUrl = '/api/v1/debt'

    constructor(protected _http: HttpClient) {
    }

    //Récuperer une dêtte
    get(id: number) {
        const requestUrl = `${this.href}${this.apiUrl}/${id}`;
        return this._http.get<any>(requestUrl)
    }

}
