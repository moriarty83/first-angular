import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Data } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  name = "Hello"
  helloWorld = "Hello World!"
  imageURL = ""
  co2e: number = 0.0
  co2eUnit: string = ""

  vehicleType: string = "car"
  fuelSource: string = "na"
  distance: Number = 20

  body: object = {
    "emission_factor": `passenger_vehicle-vehicle_type_${this.vehicleType}-fuel_source_${this.fuelSource}-engine_size_na-vehicle_age_na-vehicle_weight_na`,
    "parameters": {
      "distance": this.distance,
      "distance_unit": "mi"
      }
  };
  headers = { 'Authorization': environment.climatiqHeader }; 

  public getEmissions(){
    return this.httpClient.post<any>('https://beta2.api.climatiq.io/estimate', 
    this.body, 
    {headers: this.headers, observe: 'response'}
    ).subscribe((data: any)=>{
      // console.log("Hello")
      console.log(data);
      console.log(data.body.co2e)
      this.co2e = data.body.co2e;
      this.co2eUnit = data.body.co2e_unit
    })  
  }

  selectVehicleHandler (event: any) {
    console.log(event.target.value)
    this.fuelSource = event.target.value;
    this.updateBody()
  }

  mileageHandler(event: any){
    this.distance = event.target.value
    this.updateBody()
  }

  public updateBody(){
    this.body = {
      "emission_factor": `passenger_vehicle-vehicle_type_${this.vehicleType}-fuel_source_${this.fuelSource}-engine_size_na-vehicle_age_na-vehicle_weight_na`,
      "parameters": {
        "distance": +this.distance,
        "distance_unit": "mi"
        }
    };
  }

  constructor(private route: ActivatedRoute, private dataService: DataService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
    // this.dataService.sendGetRequest().subscribe((data: any)=>{
    //   console.log(data);
    //   this.imageURL = data.url
    // })  

  }
}
