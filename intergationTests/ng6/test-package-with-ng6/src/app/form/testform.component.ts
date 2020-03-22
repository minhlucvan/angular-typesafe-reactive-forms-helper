import { Component, OnInit } from '@angular/core';
import { /*FormGroup, FormBuilder,*/ Validators, FormControl } from '@angular/forms';
import {FormBuilderTypeSafe, FormGroupTypeSafe} from 'angular-typesafe-reactive-forms-helper';

interface HeroFormModel {
  heroName: string;
}

@Component({
  selector: 'app-test-form',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.css']
})
export class TestFormComponent implements OnInit {
  title = 'test-package-with-ng6';

  testForm: FormGroupTypeSafe<HeroFormModel>;

  constructor(private fb: FormBuilderTypeSafe) { }

  ngOnInit(): void {
    this.testForm = this.fb.group<HeroFormModel>({
      heroName: new FormControl('Hi-Man', Validators.required),
    });

    console.log(this.testForm.getSafe(x => x.heroName));
  }

  getHeroNameByValue = () => this.testForm.value.heroName;
  getHeroNameByGetSafe = () => this.testForm.getSafe(x => x.heroName).value;

}
