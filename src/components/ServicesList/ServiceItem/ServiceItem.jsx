import { NavLink } from "react-router-dom";

export const ServiceItem = ({name, price, id}) => {
  return (
    <li className='service-list__item item'>
      <NavLink to={`/${id}/details`}>
        <p className="item__name">{name}</p>
      </NavLink>
    </li>
  )
}
