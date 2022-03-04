import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  children: ReactNode | ((props: { isActive: boolean }) => ReactNode);
  routeName: string;
}
export const Link = (props: Props) => {
  return (
    <li>
      <NavLink
        to={props.routeName}
        className={({ isActive }) => (isActive ? 'nav-active' : '')}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default Link;
