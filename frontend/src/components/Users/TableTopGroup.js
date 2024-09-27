import classes from './TableTopGroup.module.css'
import FiltersGroup from './FiltersGroup'
import ActionsGroup from './ActionsGroup'

export default function TableTopGroup() {
  return (
      <div className={classes.container}>
          <FiltersGroup />
          <ActionsGroup />
      </div>
  )
}
