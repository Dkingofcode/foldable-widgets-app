import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widgets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widgets.component.html',
  styleUrl: './widgets.component.css'
})
export class WidgetsComponent {
   isFolded = false;
   currentCard = 0;

   cards = [
     {title: 'Card 1', content: 'Content for card 1' },
     {title: 'Card 2', content: 'Content for card 2' },
     {title: 'Card 3', content: 'Content for card 3' },
   ];

   toggleFold() {
     this.isFolded = !this.isFolded;

   }

   prevCard() {
     this.currentCard = (this.currentCard > 0) ? this.currentCard - 1 : this.cards.length - 1;
   }

   nextCard() {
     this.currentCard = (this.currentCard < this.cards.length - 1) ? this.currentCard + 1 : 0;
   }
}
