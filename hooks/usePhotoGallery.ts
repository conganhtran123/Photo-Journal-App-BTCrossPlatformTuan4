import { useState, useEffect } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
  title: string;
}

const PHOTO_STORAGE = 'photos';

export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  useEffect(() => {
    const loadPhotos = async () => {
      const { value } = await Preferences.get({ key: PHOTO_STORAGE });
      const photosInPref = value ? JSON.parse(value) : [];
      setPhotos(photosInPref);
    };
    loadPhotos();
  }, []);

  const takePhoto = async (title: string) => {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const fileName = new Date().getTime() + '.jpeg';

    await Filesystem.writeFile({
      path: fileName,
      data: capturedPhoto.base64String || '',
      directory: Directory.Data,
    });

    const newPhoto: UserPhoto = {
      filepath: fileName,
      webviewPath: capturedPhoto.webPath,
      title,
    };

    const newPhotos = [newPhoto, ...photos];
    setPhotos(newPhotos);
    Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });
  };

  return { photos, takePhoto };
}
