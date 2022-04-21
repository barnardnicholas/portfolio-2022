import { useRef, useEffect } from "react";
import { cameraBounds } from "../constants/camera";

export function usePrevious(value: any) {
  const ref = useRef<any>(value);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}

export function isEmpty(item: any): boolean {
  if (Array.isArray(item)) return !item.length;
  if (typeof item === "string") return !item.trim().length;
  if (item instanceof Date) return isNaN(item.valueOf());
  if (typeof item === "object") return isObjEmpty(item);
  if (typeof item === "number") return false;

  return !item;
}

function isObjEmpty(obj: Record<string, unknown>): boolean {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

export const radiansToDegrees = (radians: number) => (radians * 180) / Math.PI;

export const degreesToRadians = (degrees: number) => (degrees * Math.PI) / 180;

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
