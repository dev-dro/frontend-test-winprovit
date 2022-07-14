import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public result: number | undefined;

  indexForm = this.formBuilder.group({
    index: ['', [Validators.required, Validators.min(0)]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private service: AppService,
  ) {}

  onSubmit(): void {
    this.result = undefined;
    const index: string = this.indexForm.controls.index.value ?? '-1';
    this.service.getAlticciByIndex(index)
      .subscribe(result => this.result = result);
  }
}
