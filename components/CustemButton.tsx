"use client";
import React from 'react'
import {CustemButtonProps} from '@/types';
import Image from 'next/image'

const CustemButton = ({title,containerStyle,handleClick}:CustemButtonProps) => {
  return (
    <div>
      <button disabled={false} type={"button"} className={`custom_btn`} onClick={()=>console.log('hi')}>
        <span className={`flex-1`}>
            Title
        </span>
      </button>
    </div>
  )
}

export default CustemButton
