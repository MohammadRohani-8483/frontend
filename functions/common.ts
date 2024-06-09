import { isOpen } from "@/types/common";
import { Dispatch, SetStateAction } from "react";

export const closePopup = (setIsOpen: Dispatch<SetStateAction<isOpen>>) => {
    setIsOpen(p => ({ ...p, visible: false }));
    setTimeout(() => setIsOpen(p => ({ ...p, open: false })), 300)
}