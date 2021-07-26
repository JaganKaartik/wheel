import React from "react";
import { Checkbox, Avatar, Button, Tooltip } from "neetoui";

export default function ContactTable({
  selectedContactIds,
  setSelectedContactIds,
  contacts = [],
  handleContactDeletion,
}) {
  const handleAllCheckboxClick = () => {
    const contactIds = contacts.map(contact => contact.id);
    if (selectedContactIds.length === contactIds.length) {
      setSelectedContactIds([]);
    } else {
      setSelectedContactIds(contactIds);
    }
  };

  const handleCheckboxRowClick = (event, contact) => {
    event.stopPropagation();
    const index = selectedContactIds.indexOf(contact.id);
    if (index > -1) {
      setSelectedContactIds([
        ...selectedContactIds.slice(0, index),
        ...selectedContactIds.slice(index + 1),
      ]);
    } else {
      setSelectedContactIds([...selectedContactIds, contact.id]);
    }
  };

  return (
    <div className="w-full px-9">
      <table className="nui-table nui-table--checkbox nui-table-actions">
        <thead>
          <tr>
            <th>
              <Checkbox
                checked={
                  selectedContactIds.length ===
                  contacts.map(contact => contact.id).length
                }
                onClick={handleAllCheckboxClick}
              />
            </th>
            <th className="text-left">Name</th>
            <th className="text-left">Email</th>
            <th className="text-center">Department</th>
            <th className="text-center">Contact Number</th>
            <th className="text-center">Add to Basecamp</th>
            <th className="text-center"></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>
                <Checkbox
                  checked={selectedContactIds.includes(contact.id)}
                  onClick={event => handleCheckboxRowClick(event, contact)}
                />
              </td>
              <td>
                <div className="flex flex-row items-center justify-start space-x-3">
                  <Avatar
                    size={36}
                    bgClassName="bg-indigo-300"
                    contact={{ name: contact.name }}
                  />
                  <p>{contact.name}</p>
                </div>
              </td>
              <td>
                <p>{contact.email}</p>
              </td>
              <td>
                <div className="text-center">{contact.department}</div>
              </td>
              <td>
                <div className="text-center">{contact.number}</div>
              </td>
              <td>
                <div className="flex flex-col items-center justify-center">
                  <Checkbox checked={contact.basecamp} />
                </div>
              </td>
              <td>
                <div className="flex flex-row items-center space-x-4">
                  <Tooltip content="Edit" position="bottom">
                    <Button style="icon" icon="ri-pencil-line" />
                  </Tooltip>
                  <Tooltip content="Delete" position="bottom">
                    <Button
                      style="icon"
                      icon="ri-delete-bin-line"
                      onClick={() => handleContactDeletion(contact)}
                    />
                  </Tooltip>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
