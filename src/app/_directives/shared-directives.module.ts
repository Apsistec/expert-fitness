import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HasPermissionDirective } from './has-permission.directive';
import { SubmitIfValidDirective } from './submit-if-valid.directive';
import { BlinkDirective } from './blink.directive';

@NgModule({
  declarations: [HasPermissionDirective, SubmitIfValidDirective, BlinkDirective],
  imports: [CommonModule],
  exports: [HasPermissionDirective, SubmitIfValidDirective, BlinkDirective]
})

export class SharedDirectivesModule {}
