import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HasPermissionDirective } from './has-permission.directive';
import { SubmitIfValidDirective } from './submit-if-valid.directive';
import { BlinkDirective } from './blink.directive';
import { HideHeaderDirective } from './hide-header.directive';
import { FadeHeaderDirective } from './fade-header.directive';
import { SafePipe } from '../_pipes/safe.pipe';
import { ToHttpsPipe } from '../_pipes/to-https.pipe';

@NgModule({
  declarations: [
    HasPermissionDirective,
    SubmitIfValidDirective,
    BlinkDirective,
    HideHeaderDirective,
    FadeHeaderDirective,
    ToHttpsPipe,
    SafePipe,
  ],
  imports: [CommonModule],
  exports: [
    HasPermissionDirective,
    SubmitIfValidDirective,
    BlinkDirective,
    HideHeaderDirective,
    FadeHeaderDirective,
    ToHttpsPipe,
    SafePipe,
  ]
})

export class SharedDirectivesModule {}
