import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { LoaderComponent } from './loader/loader.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContactRequestComponent } from './contact-request/contact-request.component';

@NgModule({
  imports: [FlexLayoutModule, MaterialModule, CommonModule],
  declarations: [LoaderComponent, ToolbarComponent, ContactRequestComponent],
  exports: [LoaderComponent, ToolbarComponent, ContactRequestComponent],
})
export class SharedModule {}
