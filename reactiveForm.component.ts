import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidationService } from '../shared/validation.service';
import { Hero } from '../shared/hero';

@Component({
  selector: 'reactive-driven-form',
  templateUrl: './reactiveForm.component.html'
})
export class ReactiveFormComponent implements OnInit {
  heroForm: FormGroup;
  model: Hero; 
  submittedModel: Hero; 
  powers: string[];
  submitted: boolean = false;
  public isCollapsed = false;
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
      this.model = new Hero(18, 'Sekhar', '13141413', '13131314', 'iq@superhero.com');
      
      this.powers = ['18-45 Age', '45+ Age', 
                     'Below 18 Age'];                     
                     
      this.heroForm = this.formBuilder.group({
        name:     [this.model.name, Validators.required],
        alterEgo: [this.model.alterEgo, Validators.required],
        email:    [this.model.email, [Validators.required, ValidationService.emailValidator]],
        power:    ['45+ Age', Validators.required]
      });
  }

  onSubmit({ value, valid }: { value: Hero, valid: boolean }) {
    this.submitted = true;
    this.submittedModel = value;
  }
}