import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { concatMap, of, tap } from 'rxjs';
import { AquaticFoodService } from 'src/app/core/service/aquatic-food.service';
import { DataStorageService } from 'src/app/core/service/data-storage.service';
import { AquaticFood } from 'src/app/core/type/aquatic-food.model';

@Component({
  selector: 'app-aquatic-edit',
  templateUrl: './aquatic-edit.component.html',
  styleUrls: ['./aquatic-edit.component.css']
})
export class AquaticEditComponent implements OnInit {

  signupForm?: FormGroup;
  aquatic?: AquaticFood;
  checkOrder?: string;
  isNew: boolean = true;

  submitEvent: boolean = false;

  constructor(
    private _aquaticFoodService: AquaticFoodService,
    private _route: ActivatedRoute,
    private _dataStorageService: DataStorageService,
  ) { }

  ngOnInit(): void {
    this._route.params
      .pipe(
        tap((params: Params) => console.log(params)),
        concatMap((params: Params) => {
          const id = params['id'];
          this.isNew = (id === 'new');
          console.log(id);
          console.log(this.isNew);
          return (this.isNew) ? of(undefined) : this._dataStorageService.fetchAquaticById(id);
        })
      )
      .subscribe((aquatic) => {
        if (this.isNew) {
          // case new
          this.signupForm = new FormGroup({
            'name': new FormControl(null, Validators.required),
            'quantity': new FormControl(null, Validators.required),
            'imagePath': new FormControl(null, Validators.required),
            'description': new FormControl(null, Validators.required),
            'menu': new FormArray([])
          });
        } else {
          this.aquatic = aquatic;
          this.signupForm = new FormGroup({
            'name': new FormControl(this.aquatic?.name || '', Validators.required),
            'quantity': new FormControl(this.aquatic?.quantity || 0, Validators.required),
            'imagePath': new FormControl(this.aquatic?.imagePath || '', Validators.required),
            'description': new FormControl(this.aquatic?.description || '', Validators.required),
            'menu': new FormArray([])
          });

          if (this.aquatic?.menu) {
            this.aquatic.menu.map((value: string) => {
              const controls = new FormControl(value, Validators.required);
              (<FormArray>this.signupForm?.get('menu')).push(controls);
            });
          }
        }
      });
  }

  onSubmit(): void {
    let aquaticData = this.signupForm?.getRawValue();
    console.log(aquaticData);
    // let aquaticData: AquaticFood =
    // {
    //   name: this.signupForm?.value.name,
    //   description: this.signupForm?.value.description,
    //   imagePath: this.signupForm?.value.imagePath,
    //   quantity: this.signupForm?.value.quantity,
    //   menu: this.signupForm?.value.menu
    // }
    // console.log(aquaticData);

    let action$;
    if (this.isNew) {
      action$ = this._dataStorageService.saveAquatic(aquaticData);
    } else {
      action$ = this._dataStorageService.updateAqutic(this.aquatic?._id as string, aquaticData);
    }

    action$.pipe(
      tap(() => this._aquaticFoodService.aquaticChangeSubject.next(true))
    )
     .subscribe(() => this.aquatic = aquaticData);
  }

  onAddMenu() {
    const controls = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm?.get('menu')).push(controls);
  }

  get controls() {
    return (this.signupForm?.get('menu') as FormArray).controls;
  }

  deleteMenu(i: number) {
    (<FormArray>this.signupForm?.get('menu')).removeAt(i);
  }

}
