export default function PhotoDetail({ photo }: { photo: any }) {
  if (!photo) return <p>Ảnh không tồn tại</p>;

  return (
    <div className="photo-detail">
      <img src={photo.webviewPath} alt={photo.title} />
      <h2>{photo.title}</h2>
    </div>
  );
}
