import Header from '../components/Header';
import Gallery from '../components/Gallery';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import { useState } from 'react';

export default function Home() {
  const { photos, takePhoto } = usePhotoGallery();
  const [title, setTitle] = useState('');

  return (
    <div>
      <Header />
      <input
        type="text"
        placeholder="Nhập tiêu đề ảnh"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => { if (title) takePhoto(title); }}>Chụp ảnh</button>
      <Gallery photos={photos} />
    </div>
  );
}
