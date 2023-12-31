import AlbumContainer from "./AlbumContainer";
import AlbumHeader from "./AlbumHeader";

function Gallery() {
  return (
    <div class="gallery grid grid-rows-[20vh,80vh] h-screen">
      <AlbumHeader></AlbumHeader>
      <AlbumContainer></AlbumContainer>
    </div>
  );
}

export default Gallery;
