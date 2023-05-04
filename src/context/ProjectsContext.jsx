import { createContext, useEffect, useState } from "react";

export const ProjectsContext = createContext({
  projects: [],
  addProject: () => {},
});

const ProjectsProvider = ({ children }) => {
  const [projects, setProject] = useState([
    {
      title: "BrainstormBox",
      description:
        "BrainstormBox is a platform designed to help you capture, organize, and store your project ideas in one convenient location With a user-friendly interface and intuitive features.",
    },
  ]);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem("react-project-app-data")
    );

    if (savedNotes) {
      setProject(savedNotes);
    }
    console.log(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("react-project-app-data", JSON.stringify(projects));
  }, [projects]);

  const addProject = (newProject) => {
    setProject([...projects, newProject]);
  };

  return (
    <ProjectsContext.Provider
      value={{ projects: projects, addProject: addProject }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsProvider;
