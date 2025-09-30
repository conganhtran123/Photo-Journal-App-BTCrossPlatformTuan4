import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import PhotoDetail from '../components/PhotoDetail';
import { usePhotoGallery } from '../hooks/usePhotoGallery';

export default function Detail() {
  const { id } = useParams();
  const { photos } = usePhotoGallery();

  const photo = photos[Number(id)];

  return (
    <div>
      <Header />
      <PhotoDetail photo={photo} />
    </div>
  );
}
