import Image from "next/image";
import classes from "./FiltersGroup.module.css";
import searchIcon from "@/public/assets/icons/search.svg";

export default function FiltersGroup() {
  return (
    <div className={classes.filtersContainer}>
      <div className={classes.searchContainer}>
        <label>User name/email</label>
        <div className={classes.searchbar}>
          <input type="text" placeholder="Search"></input>
          <Image src={searchIcon} />
        </div>
      </div>
      <div className={classes.roleContainer}>
        <label>User Role</label>

        <select className={classes.roleDropdown}>
          <option value="all" selected>
            All
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className={classes.roleContainer}>
        <label>User Status</label>

        <select className={classes.roleDropdown}>
          <option value="all" selected>
            All
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
  );
}
