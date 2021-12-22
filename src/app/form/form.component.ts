import { Component, OnInit } from '@angular/core';
import { Details } from './details';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  personalcode = ['O23A'];

  model = new Details(1, ['kokos toto'],['2AWE34'],48);

  submitted = false;

  onSubmit() { this.submitted = true; }


  newHero() {
    this.model = new Details(42, [''], [''], 23,+254720000000,[''],);
  }

  // skyDog(): Details {
  //   const myHero =  new Details(42, 'SkyDog',
  //                          'Fetch any object at any distance',
  //                          'Leslie Rollover');
  //   console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
  //   return myHero;
  // }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls.fullname &&
    form.controls.fullname.value; // Dr. IQ
  }

  /////////////////////////////

}
