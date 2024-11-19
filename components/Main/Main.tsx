import React, { ReactNode } from 'react'

interface MainProps {
  children: ReactNode;
}

function Main(props: MainProps) {
    const  { children } = props
  return (
    <main className='flex-1'>
        {children}
    </main>
  )
}

export default Main