import Image from 'next/image'
import plusIcon from '@/public/assets/icons/plus.svg'
import classes from './ActionsGroup.module.css'

export default function ActionsGroup() {
  return (
    <div>
      <button className={classes.btn}><Image src={plusIcon} /> Add User</button>
    </div>
  )
}
