import {MouseEventHandler }from 'react';
export interface CustemButtonProps{
    title:string;
    containerStyle?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
}