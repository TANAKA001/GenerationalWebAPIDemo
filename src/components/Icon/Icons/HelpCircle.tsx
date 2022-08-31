import { FC } from "react";

const HelpCircle: FC = () => (
  <g>
    <circle cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <line
      x1='12'
      y1='17'
      x2='12.01'
      y2='17'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </g>
);

export default HelpCircle;
