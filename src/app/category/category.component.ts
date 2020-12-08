import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../services/quote.service';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  categoryName: string;

  constructor(private quoteService: QuoteService, private actRoute: ActivatedRoute) {
    this.categoryName = this.actRoute.snapshot.params.category;
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.quoteService
      .getRandomQuote({ category: this.categoryName })
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
