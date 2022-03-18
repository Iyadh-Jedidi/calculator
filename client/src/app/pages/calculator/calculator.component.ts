import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/shared/services/calculator.service';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService,
  ) {

  }

  pressNum(elt: string) {
    this.result = '';
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
    if (this.input[this.input.length - 1] === ' ') {
      this.input = this.input.substring(0, this.input.length - 2);
    }
    if (this.operators.includes(this.input[this.input.length - 1])) {
      this.input = this.input.substring(0, this.input.length - 2);

    } else {
      this.input = this.input.substring(0, this.input.length - 1);

    }
  }
  getResult() {
    this.calculatorService.getResult(this.input).subscribe(data => {
      this.result = data;
    }, error => {
      this.toastr.error('Please correct your expression !');
      this.result = 'ERROR';
    });
  }


}
