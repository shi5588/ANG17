import { Component, OnInit } from '@angular/core';
import * as math  from 'mathjs';
import * as bigInt from 'big-integer'

@Component({
  selector: 'app-mathtest',
  templateUrl: './mathtest.component.html',
  styleUrls: ['./mathtest.component.css']
})
export class MathtestComponent implements OnInit {

  value1 = 'not init';
  constructor() { }

  ngOnInit() {
    //this.value1 = math.eval('3*(0.1+0.7)'); //JSON.stringify(math.parse('3*(0.1+0.7)')) ;
    //this.value1 = math.eval('1040069977312325632	+ 1040069977312325632');
    this.value1 = JSON.stringify(bigInt(849490716543664347967309793955442).add(12));
  }

}
