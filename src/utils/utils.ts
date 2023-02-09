import { cameraBounds } from "../constants/camera";

export const getScrollFloat = () => {
  const h = document.documentElement;
  const b = document.body;
  return (
    (h.scrollTop || b.scrollTop) /
    ((h.scrollHeight || b.scrollHeight) - h.clientHeight)
  );
};

export const getPositionFromScroll = () => {
  const position =
    cameraBounds.top -
    (cameraBounds.top - cameraBounds.bottom) * getScrollFloat();
  return position;
};
