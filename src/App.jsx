import img_1 from "./assets/img-1.jpg";
import img_2 from "./assets/img-2.jpg";
import img_3 from "./assets/img-3.jpg";
import img_4 from "./assets/img-4.jpg";
import Banner from "./Banner";

function App() {
  const images = [img_1, img_2, img_3, img_4];

  return (
    <>
      <div>
        <Banner image={images} />
      </div>
    </>
  );
}

export default App;
