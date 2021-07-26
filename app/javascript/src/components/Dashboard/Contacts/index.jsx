import React, { useState, useEffect } from "react";

import { Button, PageLoader } from "neetoui";
import EmptyState from "components/Common/EmptyState";
import EmptyNotesListImage from "images/EmptyNotesList";
import { Header, SubHeader } from "neetoui/layouts";

import { CONTACTS, SORT_BY_OPTIONS } from "constants/noteConstants";

const Contacts = () => {
  /* eslint-disable */
  const [loading, setLoading] = useState(true);
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const [contacts] = useState(CONTACTS);
  /* eslint-enable */
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <PageLoader />;
  }
  return (
    <>
      <Header
        title="Contacts"
        actionBlock={<Button label="New Contact" icon="ri-add-line" />}
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
    </>
  );
};

export default Contacts;
