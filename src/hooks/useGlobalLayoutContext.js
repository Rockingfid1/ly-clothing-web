import { useContext } from "react";
import { GlobalLayout } from "../lib/store/GlobalLayoutProvider";

export default function useGlobalLayoutContext() {
  return useContext(GlobalLayout);
}
