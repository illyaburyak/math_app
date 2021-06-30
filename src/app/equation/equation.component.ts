import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomValidators} from "../custom-validators";
import {delay, filter, scan} from "rxjs/operators";

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  secondsPerSolution = 0;

  mathForm = new FormGroup({
    a: new FormControl(this.randomNum(),),
    b: new FormControl(this.randomNum(),),
    answer: new FormControl('',),
  }, [
    CustomValidators.addition('answer', 'a', 'b')
  ]);

  constructor() {
  }

  get a() {
    return this.mathForm.value.a
  }

  get b() {
    return this.mathForm.value.b
  }

  ngOnInit() {
    this.mathForm.statusChanges
      .pipe(
      filter(value => value === 'VALID'),
      delay(100),
      scan((acc) => {
        return {
          numberSolved: acc.numberSolved + 1,
          startTime: acc.startTime
        }
      }, {
        numberSolved: 0,
        startTime: new Date()
      })
    ).subscribe(({numberSolved, startTime}) => {
      this.secondsPerSolution = (
        new Date().getTime() - startTime.getTime()
      ) / numberSolved / 1000

      this.mathForm.setValue({
        a: this.randomNum(),
        b: this.randomNum(),
        answer: ''
      })
    })
  }

  randomNum() {
    return Math.floor(Math.random() * 10);
  }

}
