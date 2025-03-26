import noProjectImage from "../assets/no-projects.png";

const NoProjectSelected = ({ onAddProject }) => {
  return (
    <div className="flex flex-col items-center mt-24 text-center w-2/3">
      <img className="w-40" src={noProjectImage} />
      <h2>No project selected</h2>
      <p>Select a project or get started with a new one.</p>
      <p>
        <button
          className="bg-stone-300	 rounded-lg m-2 px-2 py-1 hover:text-slate-50"
          onClick={onAddProject}
        >
          Create new project.
        </button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
