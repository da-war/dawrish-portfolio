import React, { PropsWithChildren } from "react";

interface Props {
  size: number;
  rotate: number;
  children: React.ReactNode;
}

export default function HeroOrbit({ children, size, rotate }: Props) {
  return (
    <div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div
          className=""
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotate}deg)`,
          }}
        >
          <div
            className=" inline-flex"
            style={{
              transform: `rotate(${rotate * -1}deg)`,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
