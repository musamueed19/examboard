import Image from 'next/image';
import classes from './UserDataTable.module.css'
import deleteIcon from '@/public/assets/icons/delete.svg'

export default function UsersDataTable() {
  return (
    <div className={classes.container}>
      <table>
        <tr>
          <td>Sr. #</td>
          <td>Name</td>
          <td>Email</td>
          <td>Role</td>
          <td>Status</td>
          <td>Designation</td>
          <td>Actions</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Asim Mehmood</td>
          <td>asimmehmood@vu.edu.pk</td>
          <td>admin</td>
          <td>active</td>
          <td>Associate Professor</td>
          <td>
            {/* <Image />
            <Image /> */}
            <Image src={deleteIcon} />
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Asim Mehmood</td>
          <td>asimmehmood@vu.edu.pk</td>
          <td>admin</td>
          <td>active</td>
          <td>Associate Professor</td>
          <td>
            {/* <Image />
            <Image /> */}
            <Image src={deleteIcon} />
          </td>
        </tr>
      </table>
    </div>
  );
}
