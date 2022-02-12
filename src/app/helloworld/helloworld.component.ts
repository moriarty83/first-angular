import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent implements OnInit {
  name = "Hello"
  helloWorld = "Hello World!"
  imageURL = ""
  body = {
    "emission_factor": "passenger_vehicle-vehicle_type_car-fuel_source_na-engine_size_na-vehicle_age_na-vehicle_weight_na",
    "parameters": {
      "distance": 20,
      "distance_unit": "mi"
      }
  };
  headers = { 'Authorization': environment.climatiqHeader }; 


  constructor(private route: ActivatedRoute, private dataService: DataService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
    this.dataService.sendGetRequest().subscribe((data: any)=>{
      console.log(data);
      this.imageURL = data.url
    })  

    this.httpClient.post<any>('https://reqres.in/api/posts', 
      this.body, 
      {headers: this.headers,
      observe: 'response'}).subscribe((response) => {
        console.log(response.status); // response status 
        console.log(response.body); // response body (returned response)
      });
    
  }

}
