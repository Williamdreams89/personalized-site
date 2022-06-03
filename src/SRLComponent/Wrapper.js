import { SRLWrapper } from "simple-react-lightbox";
import { options } from "../options";
import { imagesCollection } from "../imagesCollection";

function Wrapper() {
  return (
    <SRLWrapper options={options}>
      <div className="row justify-content-around p-2">
        {imagesCollection.map((image) => (
          <div className="col-md-4" key={image.id}>
            <img
              src={image.image}
              className="img-thumbnail shadow-lg m-2"
              alt={image.image}
            />
          </div>
        ))}
      </div>
    </SRLWrapper>
  );
}
export default Wrapper;
