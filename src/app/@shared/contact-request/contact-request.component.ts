import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cr',
  templateUrl: './contact-request.component.html',
  styleUrls: ['./contact-request.component.scss'],
})
export class ContactRequestComponent implements OnInit {
  countries = ['USA', 'Germany', 'Italy', 'France'];
  requestTypes = ['Claim', 'Feedback', 'Help Request'];
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.createFormGroup();
  }

  ngOnInit(): void {}

  createFormGroup() {
    return new FormGroup({
      personalData: new FormGroup({
        email: new FormControl(),
        mobile: new FormControl(),
        country: new FormControl(),
      }),
      requestType: new FormControl(),
      text: new FormControl(),
    });
  }

  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      personalData: formBuilder.group({
        email: 'defaul@email.com',
        mobile: '',
        country: '',
      }),
      requestType: '',
      text: '',
    });
  }

  onSubmit() {}
}

// export class ContactRequest {
//   personalData: PersonalData
//   requestType: any = ''
//   text: string = ''
// }

// export class PersonalData {
//   email: string = ''
//   mobile: string = ''
//   country: string = ''
// }
