import { TagsProps } from '@/types'
import React from 'react'

const Tags = ({tagName} : TagsProps) => {
  return (
    <div className='mt-4 py-1 px-3 text-sm font-semibold rounded-full border text-white'>
        {tagName}
    </div>
  )
}

export default Tags