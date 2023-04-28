import { classNames } from '../../lib/classNames/classNames'
import './Loader.scss'

export const Loader = () => {
 return (
    <div className={classNames("lds-roller", {}, [])}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
  )
}