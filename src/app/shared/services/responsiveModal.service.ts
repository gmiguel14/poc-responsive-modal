import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveModalService {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private bottomSheet: MatBottomSheet,
    private dialog: MatDialog,
  ) { }

  open(component: any, data?: any): Observable<any> {
    return new Observable<any>((observer) => {
      this.breakpointObserver
        .observe([Breakpoints.Handset])
        .pipe(
          take(1),
          map((result) => result.matches)
        )
        .subscribe((isMobile) => {
          if (isMobile) {
            const bottomSheetRef = this.bottomSheet.open(component,
              {
                data,
                panelClass: 'bottom-sheet-responsive',
                backdropClass: 'bottom-sheet-backdrop',
              });
            bottomSheetRef.afterDismissed().subscribe((res) => {
              observer.next(res);
              observer.complete();
            });
          } else {
            const dialogRef = this.dialog.open(component, {
              data,
              width: '600px',
              height: '200px',
              panelClass: 'dialog-responsive'
            });
            dialogRef.afterClosed().subscribe((res) => {
              observer.next(res);
              observer.complete();
            })
          }
        });
    })
  }
}
