import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-minus',
  templateUrl: './minus.component.html',
  styleUrls: ['./minus.component.scss']
})
export class MinusComponent implements OnInit {


  substract!: FormGroup;
  submitted: boolean = false;
  sumOf: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.substract = new FormGroup({
      val1 : new FormControl('', [Validators.required]),
      val2 : new FormControl('', [Validators.required]),
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.substract.controls;
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

    if (this.substract.invalid) {
      return;
    }
    this.sumOf = parseInt(this.substract.value.val1) - parseInt(this.substract.value.val2);


  }
}
