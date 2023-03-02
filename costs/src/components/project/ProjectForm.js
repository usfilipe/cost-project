import Input from "../form/Input";
import styles from "./ProjectForm.module.css";

function ProjectForm() {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Project Name"
        name="name"
        placeholder="Insert the project name"
      />

      <div>
        <input type="number" placeholder="Insert the budget" />
      </div>
      <div>
        <select name="category_id">
          <option disabled>Select Category</option>
        </select>
      </div>
      <div>
        <input type="submit" value="Create Project" />
      </div>
    </form>
  );
}

export default ProjectForm;
