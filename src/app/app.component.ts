import { Component, Inject, Optional } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResponsiveModalService } from './shared/services/responsiveModal.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { BaseModalComponent } from './shared/components/baseModal/baseModal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'poc-proj';
  data: any;

  constructor(
    private responsiveModalService: ResponsiveModalService,
    @Optional() @Inject(MAT_DIALOG_DATA) private dialogData: any,
    @Optional() @Inject(MAT_BOTTOM_SHEET_DATA) private bottomSheetData: any
  ) {
    this.data = this.dialogData || this.bottomSheetData || {};
  }


  ngOnInit() {}

  openModal() {
    this.responsiveModalService.open(BaseModalComponent, {
      message: 'Aberto via serviço responsivo!',
    }).subscribe(res => {
      console.log('Valor emitido no close do modal: ', res);
    });
  }
}
