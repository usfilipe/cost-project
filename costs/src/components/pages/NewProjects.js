import ProjectForm from "../project/ProjectForm";
import styles from "./NewProjects.module.css";

function NewProjects() {
  return (
    <div className={styles.newproject_container}>
      <h1>Create New Project</h1>
      <p>Create your project and then add the services</p>
      <ProjectForm />
    </div>
  );
}

export default NewProjects;
