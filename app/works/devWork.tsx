import React from 'react'
import WorkList from './WorkList'
import devWorks from '../utils/devWork'

export default function uxuiWork() {
  return (
    <WorkList title="Coding" works={devWorks} />
  )
}
