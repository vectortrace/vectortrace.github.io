import { Button, Hero } from "react-daisyui";

export default function VTrace() {
  return (
    <Hero className="grid-cols-[minmax(0,1fr)]">
      <Hero.Content className="text-center">
        <div className="w-10/12 h-dvh">
          <h1 className="text-5xl font-bold">VertexTrace</h1>
          <p className="py-6 text-lg">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="w-full h-0 relative pt-[56.25%]">
            <iframe
              src="https://app.visla.us/embed/1274615970446495745"
              frameBorder="0"
              allow="fullscreen *"
              className="absolute w-full h-full border-[none] left-0 top-0"
            ></iframe>
          </div>
          <Button className="my-16 outline">Get started</Button>
        </div>
      </Hero.Content>
    </Hero>
  );
}
