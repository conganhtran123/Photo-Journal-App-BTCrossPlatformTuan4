import { Link } from 'react-router-dom';

export default function Gallery({ photos }: { photos: any[] }) {
  return (
    <div className="gallery">
      {photos.map((p, i) => (
        <Link to={`/detail/${i}`} key={i}>
          <div className="photo-card">
            <img src={p.webviewPath} alt={p.title} />
            <p>{p.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
