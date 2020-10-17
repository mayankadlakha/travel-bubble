import React from 'react';

type HelloWorldProps = {
  name: string,
}

const HelloWorld = ({name}: HelloWorldProps) => {
  return (
    <span>
      Hello {name}!
    </span>
  )
}

export default HelloWorld;