import React from 'react'
import WorkList from './WorkList'
import uxuiWorks from '../utils/uxuiWorks'

export default function uxuiWork() {
  return (
    <WorkList title="UX/UI Design" works={uxuiWorks} />
  )
}
