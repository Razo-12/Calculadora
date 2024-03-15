import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  result: string = '0';
  buttons: string[] = [
    'C', '1', '2', '/',
    '3', '4', '5', '*',
    '6', '7', '8', '-',
    '9', '0', '=', '+'
  ];

  buttonClicked(button: string) {
    if (button === 'C') {
      this.result = '0';
    } else if (button === '=') {
      try {
        this.result = eval(this.result);
      } catch (error) {
        this.result = 'Error';
      }
    } else {
      if (this.result === '0' && !isNaN(parseInt(button))) {
        this.result = button;
      } else {
        this.result += button;
      }
    }
  }
}