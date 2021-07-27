import React from "react";
import { Checkbox, Badge, Avatar, Button, Tooltip } from "neetoui";

export default function NoteTable({
  selectedNoteIds,
  setSelectedNoteIds,
  notes = [],
  handleNoteDeletion,
}) {
  return (
    <div className="w-full px-24">
      <table className="mt-10 nui-table nui-table--checkbox nui-table-actions">
        <thead>
          <tr>
            <th>
              <Checkbox
                checked={
                  selectedNoteIds.length === notes.map(note => note.id).length
                }
                onClick={() => {
                  const noteIds = notes.map(note => note.id);
                  if (selectedNoteIds.length === noteIds.length) {
                    setSelectedNoteIds([]);
                  } else {
                    setSelectedNoteIds(noteIds);
                  }
                }}
              />
            </th>
            <th className="text-left">Title</th>
            <th className="text-left">Description</th>
            <th className="text-center">Tags</th>
            <th className="text-center">Created Date</th>
            <th className="text-center">Due Date</th>
            <th className="text-center">Contact</th>
            <th className="text-left"></th>
          </tr>
        </thead>
        <tbody>
          {notes.map(note => (
            <tr
              key={note.id}
              className={"cursor-pointer bg-white hover:bg-gray-50"}
            >
              <td>
                <Checkbox
                  checked={selectedNoteIds.includes(note.id)}
                  onClick={event => {
                    event.stopPropagation();
                    const index = selectedNoteIds.indexOf(note.id);

                    if (index > -1) {
                      setSelectedNoteIds([
                        ...selectedNoteIds.slice(0, index),
                        ...selectedNoteIds.slice(index + 1),
                      ]);
                    } else {
                      setSelectedNoteIds([...selectedNoteIds, note.id]);
                    }
                  }}
                />
              </td>
              <td>
                <div className="flex flex-row items-center justify-start">
                  <Button style="link" label={`${note.title}`} />
                </div>
              </td>
              <td>
                <p className="w-32 truncate">{note.description}</p>
              </td>
              <td>
                <div className="text-center">
                  <Badge color={note.tag.color}>{note.tag.message}</Badge>
                </div>
              </td>
              <td>
                <div className="text-center">{note.createdDate}</div>
              </td>
              <td>
                <div className="text-center">
                  {note.dueDate !== "" ? note.dueDate : "--"}
                </div>
              </td>
              <td>
                <div className="flex justify-center">
                  <Avatar
                    size={36}
                    bgClassName="bg-indigo-300"
                    contact={{ name: note.contact }}
                  />
                </div>
              </td>
              <td>
                <div className="flex flex-row items-center space-x-4">
                  <Tooltip content="Edit" position="bottom">
                    <Button style="icon" icon="ri-pencil-line" />
                  </Tooltip>
                  <Tooltip content="Delete" position="bottom">
                    <Button
                      onClick={() => handleNoteDeletion(note)}
                      style="icon"
                      icon="ri-delete-bin-line"
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
