import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent implements OnInit {
  name = "Hello"
  helloWorld = "Hello World!"
  imageURL = ""
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

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
