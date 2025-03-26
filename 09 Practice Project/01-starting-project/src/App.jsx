import { useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import CreateNewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectID: null,
    projects: [],
    id: 0,
    tasks: [],
  });

  const handleStartAddProject = () => {
    setProjectState((preState) => {
      return {
        ...preState,
        selectedProjectID: undefined,
      };
    });
  };

  const handleAddProject = (projectData) => {
    setProjectState((preState) => {
      const newProject = {
        ...projectData,
        id: preState.id,
      };

      return {
        ...preState,
        projects: [...preState.projects, newProject],
        selectedProjectID: null,
        id: preState.id + 1,
      };
    });
  };

  const handleSelectProject = (id) => {
    const selectedProject = projectState.projects.find(
      (project) => project.id === id
    );
    if (selectedProject) {
      setProjectState((preState) => ({
        ...preState,
        selectedProjectID: selectedProject.id,
      }));
    }
  };

  const handleDeleteProject = (id) => {
    setProjectState((preState) => {
      return {
        ...preState,
        projects: preState.projects.filter((project) => project.id !== id),
        selectedProjectID: null,
      };
    });
  };

  const handleAddTask = (task) => {
    setProjectState((preState) => {
      const taskId = Math.random(); // Generate a unique ID for the task
      const newTask = {
        task: task,
        projectID: preState.selectedProjectID,
        id: taskId,
      };

      return {
        ...preState,
        tasks: [...preState.tasks, newTask],
      };
    });
  };

  const handleDeleteTask = (taskId) => {
    setProjectState((preState) => {
      return {
        ...preState,
        tasks: preState.tasks.filter((task) => task.id!== taskId),
      };
    });
  };

  // Render content conditionally
  let mainContent;
  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectID
  );
  switch (projectState.selectedProjectID) {
    case null:
      mainContent = <NoProjectSelected onAddProject={handleStartAddProject} />;
      break;
    case undefined:
      mainContent = (
        <CreateNewProject
          onAddProject={handleAddProject}
          onCancel={() =>
            setProjectState((prevState) => ({
              ...prevState,
              selectedProjectID: null,
            }))
          }
        />
      );
      break;
    default:
      mainContent = (
        <SelectedProject
          projectData={selectedProject}
          onDeleteProject={handleDeleteProject}
          onAddTask={handleAddTask}
          onDeleteTask={handleDeleteTask}
          tasks={projectState.tasks}
        />
      );
  }

  return (
    <main className="h-screen my-14 flex gap-x-20">
      <Sidebar
        onAddProject={handleStartAddProject}
        projectList={projectState.projects}
        onSelectProject={handleSelectProject}
      />
      {mainContent}
    </main>
  );
}

export default App;
