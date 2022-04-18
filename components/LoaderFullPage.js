import React from 'react'
import { Spinner } from '@chakra-ui/react'

const LoaderFullPage = ({
    thickness='4px',
    speed='0.65s',
    emptyColor='gray.200',
    color='orange.500',
    size='xl'
}) => {
  return (
    <Spinner
        thickness
        speed
        emptyColor
        color
        size
    />
  )
}

export default LoaderFullPage