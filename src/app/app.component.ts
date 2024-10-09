import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LayoutComponent} from './common-ui/layout/layout.component';
import {ProfileCardComponent} from './common-ui/profile-card/profile-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileCardComponent, LayoutComponent],


  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  ngOnInit() {
    function addNumbers(firstNumber: number, ...numberArray: number[]): number {
      
      let result = firstNumber;
      for (let i = 0; i < numberArray.length; i++) {
          result+= numberArray[i];
      }
      return result;
  }
    
  let num1 = addNumbers(3, 7, 8);
  console.log(num1); // 18
    
  let num2 = addNumbers(3, 7, 8, 9, 4);
  console.log(num2); // 31

}

}
