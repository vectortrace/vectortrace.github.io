import VTrace from "./components/VTrace";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Title from "./components/Title";
import { Artboard } from "react-daisyui";
import Subtitle from "./components/Subtitle";
import VFooter from "./components/VFooter";
import Image from "./components/Image";
import TwoColContainer from "./components/GridTwoCol";
import Code from "./components/Code";

function App() {
  return (
    <>
      <Navbar />
      <VTrace />
      <Section bgColor="bg-[#1a1c1f]">
        <div className="grid grid-cols-1 px-10">
          <Title text="The world’s leading AI teams trust VertexTrace" />
          <Code />
        </div>
      </Section>
      <Section bgColor="bg-[#282a2f]">
        <>
          <TwoColContainer>
            <Subtitle text="Run ml experiments on cloud gpu locally" />
            {/* <Subtitle text="Run ml experiments on cloud gpu locally" /> */}
          <Image src="https://site.wandb.ai/nitropack_static/pfApWRihljemXzAqfjcIBKUphCWQwXRI/assets/images/optimized/rev-ccaa708/site.wandb.ai/wp-content/uploads/2023/07/personas-train-03.jpg 1070w, https://site.wandb.ai/nitropack_static/pfApWRihljemXzAqfjcIBKUphCWQwXRI/assets/images/optimized/rev-ccaa708/site.wandb.ai/wp-content/uploads/2023/07/personas-train-03-300x225.jpg 300w, https://site.wandb.ai/nitropack_static/pfApWRihljemXzAqfjcIBKUphCWQwXRI/assets/images/optimized/rev-ccaa708/site.wandb.ai/wp-content/uploads/2023/07/personas-train-03-1024x768.jpg 1024w, https://site.wandb.ai/nitropack_static/pfApWRihljemXzAqfjcIBKUphCWQwXRI/assets/images/optimized/rev-ccaa708/site.wandb.ai/wp-content/uploads/2023/07/personas-train-03-768x576.jpg 768w" />
          </TwoColContainer>
          <TwoColContainer>
            <Image src="https://site.wandb.ai/nitropack_static/pfApWRihljemXzAqfjcIBKUphCWQwXRI/assets/images/optimized/rev-ccaa708/site.wandb.ai/wp-content/uploads/2023/07/63d13c61f294b97d97df7488_personas-train-02.jpg" />
            <Subtitle text="Run ml experiments on cloud gpu locally" />
          </TwoColContainer>
          <TwoColContainer>
            <Subtitle text="Run ml experiments on cloud gpu locally" />
            <Image src="https://site.wandb.ai/nitropack_static/pfApWRihljemXzAqfjcIBKUphCWQwXRI/assets/images/optimized/rev-ccaa708/site.wandb.ai/wp-content/uploads/2023/07/63d13c62150c60b849593375_personas-train-01.jpg" />
          </TwoColContainer>
        </>
      </Section>
      <VFooter />
    </>
  );
}

export default App;
