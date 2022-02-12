import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Data } from '@angular/router';
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

  vehicleType: string = ""
  distance: Number = 0

  body: object = {
    "emission_factor": "passenger_vehicle-vehicle_type_car-fuel_source_na-engine_size_na-vehicle_age_na-vehicle_weight_na",
    "parameters": {
      "distance": 20,
      "distance_unit": "mi"
      }
  };
  headers = { 'Authorization': environment.climatiqHeader }; 

  public getEmissions(){
    return this.httpClient.post<any>('https://beta2.api.climatiq.io/estimate', 
    this.body, 
    {headers: this.headers, observe: 'response'}
    ).subscribe((data: any)=>{
      console.log("Hello")
      console.log(data);
    })  
  }

  public updateBody(vehicle: string, distance: number){

  }

  constructor(private route: ActivatedRoute, private dataService: DataService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
    this.dataService.sendGetRequest().subscribe((data: any)=>{
      console.log(data);
      this.imageURL = data.url
    })  

  }
}
