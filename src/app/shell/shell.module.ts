import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '@shared';
import { I18nModule } from '@app/i18n';
import { MaterialModule } from '@app/material.module';
import { AuthModule } from '@app/auth';
import { ShellComponent } from './shell.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    AuthModule,
    I18nModule,
    RouterModule,
  ],
  declarations: [ShellComponent],
})
export class ShellModule {}
