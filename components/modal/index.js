'use client';
import { X } from "@phosphor-icons/react";
import { Children } from "react";

export const Modal = ({ open, onClose, children }) => {
    const handleOnClose = () => {
        onClose()
    }
    return (
        <>
            <div
                className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>
                <div className={`bg-white rounded-lg shadow p-6 transition-all w-full mx-4 ${open ? "scale-100 opacity-100" : "scale-110 opacitiy-0"}`}
                    onClick={(e) => e.stopPropagation()} >
                    {children}
                </div>
            </div>
        </>
    )
}
