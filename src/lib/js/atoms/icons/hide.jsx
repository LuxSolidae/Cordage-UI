import React from "react";

export type Props = {
  color?: string,
}

export const Hide = ({ color }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g fill={color}>
        <path d="M18.7 7.3v1.4H8.3V7.3zm0 4v1.4H8.3v-1.4zm0 4v1.4H8.3v-1.4zM4.99 14.828L2.16 12 4.99 9.17 4 8.181.18 12 4 15.818z"></path>
      </g>
    </svg>
  );
}

Hide.defaultProps = {
  color: '#FD8F67',
};

export default Hide;
