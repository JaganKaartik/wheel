import React from "react";
import { Alert, Toastr } from "neetoui";

export default function DeleteAlert({ onClose, selectedContactIds }) {
  const handleDelete = () => {
    onClose();
    Toastr.success(
      `${
        selectedContactIds.length > 1 ? "Contacts" : "Contact"
      } deleted successfully`
    );
  };
  return (
    <Alert
      isOpen
      style="danger"
      title="Delete Contact"
      submitButtonProps={{
        style: "danger",
        label: "Continue anyway",
        onClick: handleDelete,
      }}
      onClose={onClose}
      confirmationText={`Are you sure you want to delete ${
        selectedContactIds.length > 1 ? "all the contacts" : " the contact"
      }. All of your data will be permanently removed from our database forever. This action cannot be undone.`}
    />
  );
}
