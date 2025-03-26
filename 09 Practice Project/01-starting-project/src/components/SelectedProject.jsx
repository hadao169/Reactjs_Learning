import NewTask from "../components/NewTask";

const SelectedProject = ({ projectData, onDeleteProject, onAddTask, onDeleteTask, tasks }) => {

  return (
    <div className="w-1/2 mt-10 flex flex-col gap-y-5">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-stone-700">
            {projectData.title}
          </h1>
          <button
            className="px-2 hover:bg-stone-200 rounded-lg"
            onClick={() => onDeleteProject(projectData.id)}
          >
            Delete
          </button>
        </div>
        <p className="text-stone-700">Description: {projectData.description}</p>
        <p>Due date: {projectData.dueDate}</p>
      </div>

      <hr className="line-break" />

      <NewTask onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks}/>
    </div>
  );
};

export default SelectedProject;
