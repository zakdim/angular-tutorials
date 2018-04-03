import { Component,
  ViewChild,
  AfterViewChecked,
  AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked, AfterViewInit {
  private count = 1;

  phoneNumberIds: number[] = [1];

  // Another way to access form template variable
  @ViewChild('myForm')
  private myForm: NgForm;

  ngAfterViewInit() {
    // console.log('ngAfterViewInit: ' + JSON.stringify(this.myForm.value));
  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked: ' + JSON.stringify(this.myForm.value));
  }

  remove(i: number) {
    this.phoneNumberIds.splice(i, 1);
  }

  add() {
    this.phoneNumberIds.push(++this.count);
  }

  register (myForm: NgForm) {
    console.log('Successful registration');
    console.log(myForm);
  }
}
