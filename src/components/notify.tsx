import { toast, Bounce } from "react-toastify";

export const notify = (text: string, type: any) => {
  toast(text, {
    type,
    position: "top-center",
    transition: Bounce,
  });
};
