import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-fat',
  templateUrl: './body-fat.component.html',
  styleUrls: ['./body-fat.component.css']
})
export class BodyFatComponent implements OnInit {
  bodyFat: number = 0;

  constructor() { }

  ngOnInit() {
  }

  submit(val){
  	console.log(val);

  	this.calculateBf(val);
  }

  //this formula uses the 4 point method
  calculateBf(val){
  	//sum
  	let sum = val.triceps + val.supra + val.thigh + val.nipple;

  	//multi
  	let sumSquare = sum * sum;

  	//formula application based on user sex
  	if(val.sex == 'female')
  		this.bodyFat = (sum * 0.29669) - (0.00043 * sumSquare) + (0.02963 * val.age) + 1.4072;
  	else
  		this.bodyFat = (sum * 0.29288) - (0.0005 * sumSquare) + (0.15845 * val.age) + 5.76377;
  }


  //this formula uses the 3 point measurement
  calculate3Bf(val){
  	
  	//sum does not vary between male and female atm
  	let sum = val.supra + val.thigh + val.nipple;

  	//multi
  	let sumSquare = sum * sum;

  	//var for tracking density
  	let bodyDensity = 0;

  	//formula application based on user sex
  	if(val.sex == 'female')
  		bodyDensity = (1.0994921 - (sum * 0.0009929) + (0.0000023 * sumSquare) - (0.0001392 * val.age)) ;
  	else
  		bodyDensity = 1.10938 - (0.0008267 * sum) + (0.0000016 * sumSquare) - (0.0001392 * val.age);


  	this.bodyFat = ((4.95/bodyDensity) - 4.5)*100;
  }

}
