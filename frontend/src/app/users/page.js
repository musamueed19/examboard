import classes from './users.module.css'
import UsersDataTable from '@/components/Users/UsersDataTable'
import Pagination from '@/components/Common Components/Pagination'
import TableTopGroup from '@/components/Users/TableTopGroup'

export default function UsersManagementPage() {
  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <h1 className={classes.heading}>Users Management</h1>
        <TableTopGroup />
        <UsersDataTable />
        <Pagination />
      </div>
    </main>
  );
}
