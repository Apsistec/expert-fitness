import { Injectable } from '@angular/core';
import {
    CameraPhoto, CameraResultType, CameraSource, Capacitor, FilesystemDirectory, Plugins
} from '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor() {}

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  }
}
