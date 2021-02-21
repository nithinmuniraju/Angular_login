import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';

@Injectable()

export class AuthService {
    constructor(private Http: HttpClient){}

    register(req) {
        return this.Http.post('http://localhost:3000/register', req)
        // return regristredData;

    }
}