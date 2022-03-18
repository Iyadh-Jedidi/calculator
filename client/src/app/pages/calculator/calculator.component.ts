import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/shared/services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  input = '';
  result = '';
  operators = ['*', '+', '-', '/'];

  constructor(
    private calculatorService: CalculatorService,
  ) {

  }

  pressNum(elt: string) {
    this.input += elt;

  }
  pressOp(elt: string) {
    this.input += ' ' + elt + ' ';

  }
  clearAll(): void {
    this.input = '';
    this.result = '';
  }
  clearOne(): void {
    this.result = '';
    if (this.input[this.input.length - 1] === ' '){
      this.input = this.input.substring(0, this.input.length - 2);
    }
    if (this.operators.includes(this.input[this.input.length - 1]) ) {
      this.input = this.input.substring(0, this.input.length - 2);

    } else {
      this.input = this.input.substring(0, this.input.length - 1);

    }
  }
  getResult() {
    console.log(this.input);
    this.calculatorService.getResult(this.input).subscribe(data => {
      console.log(data);
      this.result = data;
    }, error => {
      window.alert('problem');

    });
  }


}
