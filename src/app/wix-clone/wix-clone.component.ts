import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-wix-clone',
  templateUrl: './wix-clone.component.html',
  styleUrls: ['./wix-clone.component.css'],
})
export class WixCloneComponent {
  x: number[] = [];
  y: number[] = [];
  z: any[] = [];
  constructor() {
    this.x = [1, 2];
    this.y = [3, 4];
    this.z = this.x.concat(this.y);
  }
  confirmPassword: any;
  signup(form: NgForm) {
    if (form.valid) {
      console.log(form);
    } else {
      return;
    }
  }
}
