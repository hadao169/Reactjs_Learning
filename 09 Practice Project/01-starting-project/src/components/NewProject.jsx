import { useState, useRef } from "react";
import Input from "./Input";

const CreateNewProject = ({ onAddProject, onCancel }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="w-1/2 py-16">
      <div className="flex gap-6 items-center justify-end">
        <button className="px-5 py-1 rounded-lg " onClick={handleCancel}>
          Cancel
        </button>
        <button
          className="bg-black text-white px-5 py-1 rounded-lg"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      <div className="flex flex-col gap-6">
        <Input label="Title" ref={title} />
        <Input label="Description" ref={description} isTextarea={true} />
        <Input label="Due date" type="date" ref={dueDate} />
      </div>
    </div>
  );
};

export default CreateNewProject;
