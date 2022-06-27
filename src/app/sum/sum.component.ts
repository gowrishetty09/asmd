import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.scss']
})
export class SumComponent implements OnInit {
  
  addition!: FormGroup;
  submitted: boolean = false;
  sumOf: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.addition = new FormGroup({
      val1 : new FormControl('', [Validators.required]),
      val2 : new FormControl('', [Validators.required]),
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.addition.controls;
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

    if (this.addition.invalid) {
      return;
    }
    this.sumOf = parseInt(this.addition.value.val1)+parseInt(this.addition.value.val2);


  }

}
