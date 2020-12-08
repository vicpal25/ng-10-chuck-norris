import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, CategoryRoutingModule],
  declarations: [CategoryComponent],
})
export class CategoryModule {}
