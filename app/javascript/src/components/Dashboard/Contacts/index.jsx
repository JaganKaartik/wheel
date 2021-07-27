import React, { useState, useEffect } from "react";
import { Button, PageLoader } from "neetoui";
import EmptyState from "components/Common/EmptyState";
import EmptyNotesListImage from "images/EmptyNotesList";
import { Header, SubHeader } from "neetoui/layouts";

import { CONTACTS, SORT_BY_OPTIONS } from "constants/contact";
import ContactTable from "./ContactTable";
import DeleteAlert from "./DeleteAlert";
import NewContactPane from "./NewContactPane";

const Contacts = () => {
  const [loading, setLoading] = useState(true);
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const [contacts] = useState(CONTACTS);

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleContactDeletion = note => {
    setSelectedContactIds([...selectedContactIds, note.id]);
    setShowDeleteAlert(true);
  };

  if (loading) {
    return <PageLoader />;
  }
  return (
    <>
      <Header
        title="Contacts"
        actionBlock={
          <Button
            onClick={() => setShowNewContactPane(true)}
            label="New Contact"
            icon="ri-add-line"
          />
        }
      />
      {contacts.length ? (
        <>
          <SubHeader
            searchProps={{
              value: searchTerm,
              onChange: e => setSearchTerm(e.target.value),
              clear: () => setSearchTerm(""),
            }}
            deleteButtonProps={{
              onClick: () => setShowDeleteAlert(true),
              disabled: !selectedContactIds.length,
            }}
            sortProps={{
              options: SORT_BY_OPTIONS,
              onClick: () => {},
              sortBy: {
                column: SORT_BY_OPTIONS[0].value,
                direction: "desc",
              },
            }}
            paginationProps={{
              count: 241,
              pageNo: 1,
              pageSize: 50,
            }}
            toggleFilter={() => {}}
          />
          <ContactTable
            selectedContactIds={selectedContactIds}
            setSelectedContactIds={setSelectedContactIds}
            contacts={contacts}
            handleContactDeletion={handleContactDeletion}
          />
        </>
      ) : (
        <EmptyState
          image={EmptyNotesListImage}
          title="Looks like you don't have any contacts!"
          subtitle="Add your contacts to send customized emails to them."
          primaryAction={() => setShowNewContactPane(true)}
          primaryActionLabel="Add New Contact"
        />
      )}
      <NewContactPane
        showPane={showNewContactPane}
        setShowPane={setShowNewContactPane}
      />
      {showDeleteAlert && (
        <DeleteAlert
          selectedContactIds={selectedContactIds}
          onClose={() => setShowDeleteAlert(false)}
        />
      )}
    </>
  );
};

export default Contacts;
