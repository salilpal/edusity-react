import React from 'react'

const Title = ({subTitle, title}) => {
  return (
    <>
    <div class="text-center text-[#212EA0] text-base font-semibold uppercase mt-19 mx-0 mb-7.5">
      <p>{subTitle}</p>
      <h2 class="text-3xl text-[#000F38] mt-1 normal-case">{title}</h2>
    </div>
    </>
  )
}

export default Title
