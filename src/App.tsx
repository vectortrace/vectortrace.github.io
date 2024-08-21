import VTrace from "./components/VTrace";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import VFooter from "./components/VFooter";
import Image from "./components/Image";
import Video from "./components/Video";
import TwoColContainer from "./components/GridTwoCol";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <VTrace />
      <div className="bg-[#1a1c1f]">
        <div className="grid grid-cols-1 px-8 h-[50%] font-serif mt-6">
          <Title text="More Coding. Less Configuring." />
        </div>
        <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
        <div className="mx-auto flex flex-col max-w-7xl mt-3">
          <TwoColContainer>
            <Subtitle
              text="Cloud GPUs"
              subtext="Switch to cloud gpu in seconds. Eliminating the need to handle authorization, package installations, or DevOps hassles"
            />
            <Video src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGOcCNbVNk&#x2F;TDdqKCqF4lWzkqsCVtq52g&#x2F;watch?embed" />
          </TwoColContainer>
          <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
          <TwoColContainer>
            <Subtitle
              text="Track and Reproduce"
              subtext="Record and organize experiment details to ensure reproducibility and efficiency. All from your local workspace!"
            />
            <Video
              firstOnLgScreen
              src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGOcMHekgQ&#x2F;d5BKtBH9g_IXuDuwqSIjPg&#x2F;watch?embed"
            />
          </TwoColContainer>
          <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
          <TwoColContainer>
            <Subtitle
              text="Easy Setup"
              subtext="A centralize place to manage GPUs. Integrate with all major providers or register your own."
            />
            <Video src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGOcB4guYc&#x2F;da1sTvnaqpCdu80sDx9NBA&#x2F;watch?embed" />
          </TwoColContainer>
          <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
          <Subtitle
            text="Visualize and Compare"
            subtext="Quickly compare different experiments and identify the best-performing models with a user-friendly web console, offers intuitive insights, allowing for a seamless selection of top-performing models.  "
          />
          <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
          <Subtitle
            text="Collaborate"
            subtext="Share experiments and insights with team members. No more excel/doc sharing. See exactly what your teammate has been working on"
          />
        </div>
      </div>
      <VFooter />
    </div>
  );
}

export default App;
