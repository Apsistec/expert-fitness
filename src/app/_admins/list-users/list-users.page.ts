import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../_services/api.service";

@Component({
  selector: "app-list-users",
  templateUrl: "./list-users.page.html",
  styleUrls: ["./list-users.page.scss"],
})
export class ListUsersPage implements OnInit {
  userData: any;

  constructor(public apiService: ApiService) {
    this.userData = [];
  }

  ngOnInit() {
    // this.getAllUsers();
  }

  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not
    // called due to view persistence in Ionic
    this.getAllUsers();
  }

  getAllUsers() {
    //Get saved list of user
    this.apiService.getList().subscribe((response) => {
      console.log(response);
      this.userData = response;
    });
  }

  delete(item) {
    //Delete item in Student data
    this.apiService.deleteItem(item.id).subscribe((Response) => {
      //Update list after delete is successful
      this.getAllUsers();
    });
  }
}
