import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  quoteCategories: string[] | [];
  isLoading = false;

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.isLoading = true;
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });

    this.quoteService
      .getQuoteCategories({ category: [] })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quoteCategories: string[]) => {
        console.log(quoteCategories);
        this.quoteCategories = quoteCategories;
      });
  }

  handleRoute(event: any) {
    console.log(event);
  }
}
