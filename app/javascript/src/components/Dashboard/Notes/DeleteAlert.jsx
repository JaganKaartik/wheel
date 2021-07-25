import React from "react";
import { Alert, Toastr } from "neetoui";

export default function DeleteAlert({ onClose, selectedNoteIds }) {
  const handleDelete = () => {
    onClose();
    Toastr.success(
      `${selectedNoteIds.length > 1 ? "Notes" : "Note"} deleted successfully`
    );
  };
  return (
    <Alert
      isOpen
      style="danger"
      title="Delete Note"
      submitButtonProps={{
        style: "danger",
        label: "Continue anyway",
        onClick: handleDelete,
      }}
      onClose={onClose}
      confirmationText={`Are you sure you want to delete ${
        selectedNoteIds.length > 1 ? "all the notes" : " the note"
      }. All of your data will be permanently removed from our database forever. This action cannot be undone.`}
    />
  );
}
