import ImageBox from "../common/ImageBox";
import MyImage from "../assets/images/DSC07334.JPG"


function MasterGallery() {

  return (
    <section className="gallery relative mt-[50vh] z-20 ">
      <div className="gallery-content grid place-content-center relative z-30">
        <div className="gallery-grid space-y-3">
          <ImageBox
            img={MyImage}
            containerClass={"w-[300px] h-[400px] left-[-400px] "}
          />
          <ImageBox
            img={MyImage}
            containerClass={"w-[300px] h-[500px] left-[10rem]"}
          />
          <ImageBox
            img={MyImage}
            containerClass={"w-[500px] h-[400px] left-[-400px]"}
          />
          <ImageBox img={MyImage} containerClass={"w-[500px] h-[400px] left-[200px]"}/>
          <ImageBox img={MyImage} containerClass={"w-[500px] h-[400px] left-[-400px]"}/>
          <ImageBox img={MyImage} containerClass={"w-[500px] h-[400px] left-[30px]"}/>
          <ImageBox img={MyImage} containerClass={"w-[500px] h-[400px] left-[-400px]"}/>
        </div>
      </div>
    </section>
  );
}

export default MasterGallery