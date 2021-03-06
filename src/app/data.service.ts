import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  private REST_API_SERVER = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

  constructor(private httpClient: HttpClient) {
    }
    public sendGetRequest(){
      return this.httpClient.get(this.REST_API_SERVER)
   }

}
