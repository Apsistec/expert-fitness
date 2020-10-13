import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  constructor() {}

  // Encrypt and Store the Object keys and values by primary key
  async store(storageKey: string, value: any) {
    const encryptedValue = btoa(escape(JSON.stringify(value)));
    await Storage.set({
      key: storageKey,
      value: encryptedValue
    });
  }

  // Get the unencrypted object's key(s) and value(s) by the primary key
  async get(storageKey: string) {
    const ret = await Storage.get({ key: storageKey });
    if (ret.value) {
      return JSON.parse(unescape(atob(ret.value)));
    } else {
      return false;
    }
  }

  // // JSON 'get' example
  // async getObject() {
  //   const ret = await Storage.get({ key: 'user' });
  //   const user = JSON.parse(ret.value);
  // }

  // Store a single key value pair (unencrypted)
  async setItem(newKey: string, newValue: any) {
   await Storage.set({key: newKey, value: newValue});
  }

  async keys() {
    const keys = await Storage.keys();
  }

  async clear() {
    await Storage.clear();
  }
}





// import { Injectable } from '@angular/core';
// import { MessageService } from '../../_services/message.service';
// import { Storage } from '@ionic/storage';
// @Injectable({
//   providedIn: 'root'
// })
// export class StorageService {
//   constructor(
//     public storage: Storage,
//     private message: MessageService
//     ) {
//   }
//   // set a key/value
//   async set(key: string, value: any): Promise<any> {
//     try {
//       const result = await this.storage.set(key, value);
//       return true;
//     } catch (reason) {
//       this.message.errorAlert(reason.message);
//       return false;
//     }
//   }
//   // to get a key/value pair
//   async get(key: string): Promise<any> {
//     try {
//       const result = await this.storage.get(key);
//       if (result !== null) {
//         return result;
//       }
//       return null;
//     } catch (reason) {
//       this.message.errorAlert(reason.message);
//       return null;
//     }
//   }
//   // set a key/value object
//   async setObject(key: string, object: any) {
//     try {
//       const result = await this.storage.set(key, JSON.stringify(object));
//       return true;
//     } catch (reason) {
//       this.message.errorAlert(reason.message);
//       return false;
//     }
//   }
//   // get a key/value object
//   async getObject(key: string): Promise<any> {
//     try {
//       const result = await this.storage.get(key);
//       if (result !== null) {
//         return JSON.parse(result);
//       }
//       return null;
//     } catch (reason) {
//       this.message.errorAlert(reason.message);
//       return null;
//     }
//   }
//   // remove a single key value:
//   remove(key: string) {
//     this.storage.remove(key);
//   }
//   //  delete all data from your application:
//   clear() {
//     this.storage.clear();
//   }
// }
