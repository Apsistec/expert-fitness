import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class HighchartService {
  private rateCollection: AngularFirestoreCollection<ChartModal>;
  rates$: Observable<ChartModal[]>;

  constructor(
    private readonly firestoreservice: AngularFirestore
    ) {
    this.rateCollection = this.firestoreservice.collection<ChartModal>('ChartData');
    // .snapshotChanges() returns a DocumentChangeAction[], which contains
    // a lot of information about "what happened" with each change. If you want to
    // get the data and the id use the map operator.
    this.rates$ = this.rateCollection.snapshotChanges().pipe(
      map((info) =>
        info.map((a) => {
          const data = a.payload.doc.data() as ChartModal;
          const id = a.payload.doc.id;
          return {
            id,
            ...data,
          };
        })
      )
    );
  }
}

export interface ChartModal {
  currency: string;
  rate: number;
}
