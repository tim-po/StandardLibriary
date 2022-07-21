import React from "react";
import './index.css'
import Spinner from "../Spinner";

type buttonPropsType = {
  type?:  "primary" | "secondary",
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
  className?: string,
  children?: React.ReactNode,
  disabled?: boolean,
  size?: 'Large' | 'Medium' | 'Small S' | 'Small XS' | 'Small XXS',
  isLoading?: boolean,
  imgBefore?: string,
  imgAfter?: string
}
export const Button = ({
  type = "primary",
  onClick,
  className,
  children,
  disabled = false,
  size = 'Medium',
    isLoading,
    imgBefore,
    imgAfter
}: buttonPropsType) => {
  const sizeLoader = {
    'Large': 24,
    'Medium': 20,
    'Small S': 16,
    'Small XS': 14,
    'Small XXS': 12
  }
  return (
    <button
      onClick={onClick}
      className={['button',type, className ? className :  '',
        size?.replace(' ', '-'), isLoading && 'load', !!imgBefore && 'p-left', !!imgAfter && 'p-right'].join(' ')}
      disabled={disabled}
    >
      {isLoading && <div className='load_spinner'>
        <Spinner size={sizeLoader[size]}/>
      </div> }
        <div className={isLoading ? "hidden" : ""}>

            {imgBefore && <img className='imgBefore'
                               src={imgBefore}
                               style={{width: sizeLoader[size], height: sizeLoader[size]}}/>}
            {children}
            {imgAfter && <img className='imgAfter'
                              src={imgAfter}
                              style={{width: sizeLoader[size], height: sizeLoader[size]}}/>}
        </div>
    </button>
  );
};
