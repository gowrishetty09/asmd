import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-divide',
  templateUrl: './divide.component.html',
  styleUrls: ['./divide.component.scss']
})
export class DivideComponent implements OnInit {


  divide!: FormGroup;
  submitted: boolean = false;
  sumOf: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.divide = new FormGroup({
      val1 : new FormControl('', [Validators.required]),
      val2 : new FormControl('', [Validators.required]),
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.divide.controls;
  }

  checkAlphaNume(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if (((charCode < 48 || charCode > 57) && charCode !== 8  && charCode !== 9)) {
    // alert(charCode);
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  sum(){
    this.submitted = true;

    if (this.divide.invalid) {
      return;
    }
    this.sumOf = parseInt(this.divide.value.val1) / parseInt(this.divide.value.val2);


  }
}
