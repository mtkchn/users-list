import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../models/user';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  userForm: FormGroup;
  constructor(
    private ds: DataService,
    private router: Router,
    private fb: FormBuilder) { }

  onSubmit() {
    this.ds.addNewUser(this.userForm.value);
    this.router.navigate(['/users']);
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.fb.group({
      name: [null, [Validators.required]],
      username: [null, [Validators.required]],
      age: [null, [Validators.required]],
      email:
        [null,
          [Validators.required, Validators.email]
        ],
      city: [null, [Validators.required]],
      street: [null, [Validators.required]],
      postcode: [null, [Validators.required, Validators.minLength(6)]],
      phone: [null, [Validators.required, Validators.pattern('[0-9]{9,12}')]]
    });
  }
}
