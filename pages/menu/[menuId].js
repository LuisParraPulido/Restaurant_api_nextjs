import React from 'react';
import { useRouter } from 'next/router'

const MenuItem = () => {
  const { query: { menuId }} = useRouter()
  return(
    <div>
      <h1>Menu Item: {menuId}</h1>
    </div>
  )
}

export default MenuItem;