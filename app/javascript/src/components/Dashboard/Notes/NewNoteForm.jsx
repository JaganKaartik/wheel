import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Input, Textarea, Select } from "neetoui/formik";
import { Button, Toastr, Switch, DateInput } from "neetoui";
import {
  TAG_OPTIONS,
  ASSIGN_CONTACT_OPTIONS,
  NEW_NOTE_INITIAL_VALUES,
  NEW_NOTE_VALIDATION_SCHEMA,
} from "constants/note";

export default function NewNoteForm({ onClose }) {
  const [dueDateChecked, setDueDateChecked] = useState(false);
  const [dueDate, setDueDate] = useState(new Date());
  const handleSubmit = () => {
    Toastr.success("New Note added successfully");
    onClose();
  };
  return (
    <Formik
      initialValues={NEW_NOTE_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={NEW_NOTE_VALIDATION_SCHEMA}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6">
          <Input label="Note Title" name="title" />
          <Select
            placeholder="Select an Option"
            options={TAG_OPTIONS}
            label="Tags"
            name="tags"
          />
          <Textarea label="Note Description" name="description" rows={8} />
          <Select
            placeholder="Select an Option"
            options={ASSIGN_CONTACT_OPTIONS}
            label="Assigned Contact"
            name="assigncontact"
          />
          <div className="flex justify-between">
            <span className="nui-label">Add Due Date to Note</span>
            <Switch
              checked={dueDateChecked}
              onChange={() => setDueDateChecked(!dueDateChecked)}
            />
          </div>
          {dueDateChecked && (
            <DateInput
              value={dueDate}
              label="Due Date"
              name="duedate"
              onChange={newDate => setDueDate(newDate)}
            />
          )}
          <div className="nui-pane__footer nui-pane__footer--absolute">
            <Button
              onClick={onClose}
              label="Cancel"
              size="large"
              style="secondary"
            />

            <Button
              type="submit"
              label="Submit"
              size="large"
              style="primary"
              className="ml-2"
              disabled={isSubmitting}
              loading={isSubmitting}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}
