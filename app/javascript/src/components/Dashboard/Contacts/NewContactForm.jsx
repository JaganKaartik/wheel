import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Input, Select } from "neetoui/formik";
import { Button, Toastr, Switch } from "neetoui";
import {
  DEPARTMENT_OPTIONS,
  NEW_CONTACT_VALIDATION_SCHEMA,
  NEW_CONTACT_INITIAL_VALUES,
} from "constants/contact";

export default function NewContactForm({ onClose }) {
  const [addToBasecamp, setAddToBasecamp] = useState(false);

  const handleSubmit = () => {
    Toastr.success("Contact added successfully");
    onClose();
  };

  return (
    <Formik
      initialValues={NEW_CONTACT_INITIAL_VALUES}
      validationSchema={NEW_CONTACT_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6">
          <Input label="Name" name="name" />
          <Input label="Email" name="email" />
          <Input label="Contact Number" name="number" />
          <Select
            placeholder="Select an Option"
            options={DEPARTMENT_OPTIONS}
            label="Department"
            name="department"
          />
          <div className="flex justify-between">
            <span className="nui-label">Add to Basecamp</span>
            <Switch
              checked={addToBasecamp}
              onChange={() => setAddToBasecamp(!addToBasecamp)}
            />
          </div>

          <div className="nui-pane__footer nui-pane__footer--absolute">
            <Button
              onClick={onClose}
              label="Cancel"
              size="large"
              style="secondary"
            />

            <Button
              type="submit"
              label="Save Changes"
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
