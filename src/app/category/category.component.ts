import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../services/quote.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
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
  }
}
