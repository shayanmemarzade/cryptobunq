import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/shared/shared-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  fullname: string;
  constructor(private sharedServiceService: SharedServiceService) {
  }
  ngOnInit(): void {
    if (localStorage['fullname']) {
      this.fullname = localStorage['fullname']
    }
    this.sharedServiceService.getUserData().subscribe((resp: any) => {
      this.fullname = resp["fullname"];
    })
  }
  logout() {
    localStorage.removeItem('fullname');
    localStorage.removeItem('email');
    this.sharedServiceService.addUserData({
      fullname: '',
      email: '',
      password: '',
    })
  }
}
