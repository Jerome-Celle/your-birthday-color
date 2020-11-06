import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'your-birthday-color';

  backgroundColor: string = 'rgb(23, 168, 237)'

  birthdayForm: FormGroup

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.birthdayForm = this._fb.group({
      year: [90],
      month: [1],
      day:  [1],
    })

    this.birthdayForm.valueChanges.subscribe(
      () => {
        const year = this.birthdayForm.value.year /100
        const month = this.birthdayForm.value.month / 12
        const day = this.birthdayForm.value.day / 31
        this.backgroundColor = `rgb(${day*255},${month*255},${year*255})`
      }
    )
  }


}
