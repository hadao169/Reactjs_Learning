const Sidebar = ({
  onAddProject,
  projectList,
  onSelectProject,
}) => {
  return (
    <>
      <aside className="bg-neutral-900 rounded-tr-2xl w-1/4 px-8 py-16 h-full">
        <h2 className="text-slate-50 font-semibold uppercase text-3xl ">
          Your Project
        </h2>
        <button
          className="text-zinc-400 bg-zinc-500 rounded-lg text-xl px-4 py-2 mt-8 hover:text-slate-50"
          onClick={onAddProject}
        >
          + Add Project
        </button>
        <ul className="flex flex-col items-start mt-3">
          {projectList.map((project, index) => {
            return (
              <button
                key={index}
                id={project.id} // Use the project's id instead of selectedID
                className="text-white mt-3 w-auto"
                onClick={() => onSelectProject(project.id)} // Bind the project's id using an arrow function
              >
                {project.title}
              </button>
            );
          })}
          ;
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
