import React from "react";
import { Modal } from "react-responsive-modal";

type ResponsiveModalProps = {
  isOpen: boolean;
  handleClosemodal: () => void;
  children: React.ReactNode;
};

export default function ResponsiveModal({
  children,
  isOpen,
  handleClosemodal
}: ResponsiveModalProps) {
  return (
    <Modal open={isOpen} onClose={handleClosemodal} center>
      {children}
    </Modal>
  );
}
