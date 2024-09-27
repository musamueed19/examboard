import classes from './Pagination.module.css'

export default function Pagination() {
  return (
    <div className={classes.container}>
      <div>
        Showing
        <select>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
        rows per page
      </div>

      <div>
        Showing
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        of {10}
      </div>
    </div>
  );
}
