import { useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";
import { cameraBounds } from "../constants/camera";

const CameraRig = () => {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();

  function getScrollFloat() {
    const h = document.documentElement;
    const b = document.body;
    return (
      (h.scrollTop || b.scrollTop) /
      ((h.scrollHeight || b.scrollHeight) - h.clientHeight)
    );
  }

  const getPositionFromScroll = () => {
    const position =
      cameraBounds.top -
      (cameraBounds.top - cameraBounds.bottom) * getScrollFloat();
    return position;
  };

  return useFrame(() => {
    camera.position.lerp(
      vec.set(camera.position.x, camera.position.y, getPositionFromScroll()),
      0.02
    );
    camera.rotation.set(mouse.y * 0.1, mouse.x * 0.1 * -1, camera.rotation.z);
  });
};

export default CameraRig;
