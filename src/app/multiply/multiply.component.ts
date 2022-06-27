import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.scss']
})
export class MultiplyComponent implements OnInit {

  multiply!: FormGroup;
  submitted: boolean = false;
  sumOf: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.multiply = new FormGroup({
      val1 : new FormControl('', [Validators.required]),
      val2 : new FormControl('', [Validators.required]),
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.multiply.controls;
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

    if (this.multiply.invalid) {
      return;
    }
    this.sumOf = parseInt(this.multiply.value.val1) * parseInt(this.multiply.value.val2);


  }

}
