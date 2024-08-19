import { Artboard, Button, Hero } from "react-daisyui";

export default function VTrace() {
  return (
    <Hero className="grid-cols-1">
      <Hero.Content className="text-center">
        <div>
          <h1 className="text-5xl font-bold">VertexTrace</h1>
          <p className="py-6 text-wrap text-2xl">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Artboard className="mx-auto" horizontal size={6}>
            test
          </Artboard>
          <Button className="my-16 outline">Get started</Button>
        </div>
      </Hero.Content>
    </Hero>
  );
}
