import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AquaticFoodService } from '../service/aquatic-food.service';

@Component({
  selector: 'app-aquatic-edit',
  templateUrl: './aquatic-edit.component.html',
  styleUrls: ['./aquatic-edit.component.css']
})
export class AquaticEditComponent implements OnInit {

  signupForm!: FormGroup;

  constructor(private aquaticFoodService: AquaticFoodService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'name': new FormControl(null,Validators.required),
      'qty' : new FormControl(null,Validators.required),
      'url': new FormControl(null,Validators.required),
      'detail': new FormControl(null,Validators.required)
    })
  }

  onSubmit() {
    this.aquaticFoodService.addAqutic(this.signupForm.value.name,this.signupForm.value.detail,this.signupForm.value.url,this.signupForm.value.qty);
    console.log(this.signupForm);
  }

}
