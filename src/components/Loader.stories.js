import Loader from "./Loader";

export default {
  title: "Components/Loader",
  component: Loader,
  argTypes: {
    size: { control: { type: "number" } },
    color: { control: { type: "color" } },
    speed: { control: { type: "number", min: 0.1, step: 0.1 } },
  },
};

export const Default = {
  args: {
    size: 48,
    color: "#0070f3",
    speed: 1,
  },
};

export const Large = {
  args: {
    size: 100,
    color: "#ff0000",
    speed: 2,
  },
};

export const Slow = {
  args: {
    size: 48,
    color: "#0070f3",
    speed: 3,
  },
};

export const Fast = {
  args: {
    size: 48,
    color: "#ff0000",
    speed: 0.3,
  },
};

