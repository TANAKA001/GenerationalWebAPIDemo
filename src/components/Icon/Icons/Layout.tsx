import { FC } from "react";

const Layout: FC = () => (
  <g>
    <path
      d='M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M3 9H21' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9 21V9' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </g>
);

export default Layout;
