import React, { useState } from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { Input, Textarea, Select } from "neetoui/formik";
import { Button, Toastr, Switch, DateInput } from "neetoui";
import { TAG_OPTIONS, ASSIGN_CONTACT_OPTIONS } from "constants/noteConstants";

export default function NewNoteForm({ onClose }) {
  const [dueDateChecked, setDueDateChecked] = useState(false);
  const [dueDate, setDueDate] = useState(new Date());
  const handleSubmit = () => {
    Toastr.success("New Note added successfully");
    onClose();
  };
  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        tags: "",
        assigncontact: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={yup.object({
        title: yup.string().required("Title is required"),
        description: yup.string().required("Description is required"),
        tags: yup.object().required("Tag is required"),
        assigncontact: yup.object().required("Assign Contact is required"),
      })}
    >
      {({ isSubmitting }) => (
        <Form>
          <Input label="Note Title" name="title" className="mb-6" />
          <Select
            placeholder="Select an Option"
            options={TAG_OPTIONS}
            label="Tags"
            name="tags"
            className="mb-6"
          />
          <Textarea
            label="Note Description"
            name="description"
            rows={8}
            className="mb-6"
          />
          <Select
            placeholder="Select an Option"
            options={ASSIGN_CONTACT_OPTIONS}
            label="Assigned Contact"
            name="assigncontact"
            className="mb-6"
          />
          <div className="flex justify-between mb-6">
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
