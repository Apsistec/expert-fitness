import { Injectable, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Injectable({
  providedIn: "root",
})
export class TitleService implements OnInit {
  getTitle;
  newTitle;
  constructor(private titleService: Title) {}

 async ngOnInit() {
    this.getTitle = await this.titleService.getTitle();

  }


  async setaTitle() {
    await this.titleService.setTitle(this.newTitle);
  }
}
