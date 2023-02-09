import { useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";
import { getPositionFromScroll } from "../utils/utils";

const CameraRig = () => {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();

  return useFrame(() => {
    camera.position.lerp(
      vec.set(camera.position.x, camera.position.y, getPositionFromScroll()),
      0.05
    );
    camera.rotation.set(mouse.y * 0.1 * -1, mouse.x * 0.1, camera.rotation.z);
  });
};

export default CameraRig;
