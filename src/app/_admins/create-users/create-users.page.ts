// student-create.page.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../_models/users.model';
import { ApiService } from '../../_services/api.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.page.html',
  styleUrls: ['./create-users.page.scss'],
})
export class CreateUsersPage implements OnInit {
  data: User;

  constructor(public apiService: ApiService, public router: Router) {
    // this.data = new User();
  }

  ngOnInit() {}

  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['list-user']);
    });
  }
}
