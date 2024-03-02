/** @format */
import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import Stars from "./components/Stars";
import Embed from "./components/Embed";
import Slider from "./components/Slider";
import { HelloWorld } from "./components/HelloWorld";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "gbmXZkkGAqY8wGTZnNei41",
      token:
        "VbwYfpQ6aeb96mv4gMhfyQmHHxlS2dBxmU227GfzvMCdJxToHOsnriS4WlI1epoJrXms0s9ys6DZ3c2P1zg",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

PLASMIC.registerComponent(Stars, {
  name: "Stars",
  props: {},
});
PLASMIC.registerComponent(Embed, {
  name: "Embed",
  props: {},
});

PLASMIC.registerComponent(Slider, {
  name: "Embed",
  props: {},
});

// ...

PLASMIC.registerComponent(HelloWorld, {
  name: "HelloWorld",
  props: {
    verbose: "boolean",
    children: "slot",
  },
});
