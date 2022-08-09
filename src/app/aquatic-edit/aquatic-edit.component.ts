import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { AquaticFood } from '../aquatic-food/aquaticFood.model';
import { AquaticFoodService } from '../service/aquatic-food.service';
import { CalculateQuatityService } from '../service/calculate-quatity.service';

@Component({
  selector: 'app-aquatic-edit',
  templateUrl: './aquatic-edit.component.html',
  styleUrls: ['./aquatic-edit.component.css']
})
export class AquaticEditComponent implements OnInit {

  signupForm!: FormGroup;

  aquatic!: AquaticFood | undefined

  checkOrder!: string

  constructor(private aquaticFoodService: AquaticFoodService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.checkOrder = params['name']!;
      }
    );
    this.aquatic = this.aquaticFoodService.openDescription(this.checkOrder);
    if (!this.aquatic) {
      this.signupForm = new FormGroup({
        'name': new FormControl(null, Validators.required),
        'qty': new FormControl(null, Validators.required),
        'url': new FormControl(null, Validators.required),
        'detail': new FormControl(null, Validators.required),
        'menu': new FormArray([])
      })
    } else {
      this.signupForm = new FormGroup({
        'name': new FormControl(this.aquatic.name, Validators.required),
        'qty': new FormControl(this.aquatic.quantity, Validators.required),
        'url': new FormControl(this.aquatic.imagePath, Validators.required),
        'detail': new FormControl(this.aquatic.description, Validators.required),
        'menu': new FormArray([])
      })
    }
  }

  onSubmit() {
    if (this.aquatic) {
      const updateAquatic: AquaticFood =
      {
        name: this.signupForm.value.name,
        description: this.signupForm.value.detail,
        imagePath: this.signupForm.value.url,
        quantity: this.signupForm.value.qty,
        onHand: 0,
        menu : this.signupForm.value.menu
      };
      this.aquaticFoodService.upDateAquatic(this.checkOrder, updateAquatic)
    } else {
      this.aquaticFoodService.addAqutic(
        this.signupForm.value.name,
        this.signupForm.value.detail,
        this.signupForm.value.url,
        this.signupForm.value.qty,
        this.signupForm.value.menu
      );
      console.log(this.aquaticFoodService.getAquaticFoods)
    }
    this.signupForm.reset()
  }

  onAddMenu() {
    const controls = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('menu')).push(controls);
  }

  get controls() {
    return (this.signupForm.get('menu') as FormArray).controls;
  }

  deleteMenu(i: number) {
    (<FormArray>this.signupForm.get('menu')).removeAt(i)
  }

}
