import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable()
export class AppService {

  baseUrl: string = environment.backend.baseUrl;

  constructor(private http: HttpClient) {}

  getAlticciByIndex(index: number | string): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/alticci/${index}`);
  }
}
