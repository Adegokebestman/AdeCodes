'use client'
// import RootLayout from '@/app/layout'
import AdminLayout from '../../../(studio)/layout'
import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export default function AdminPage() {
  return(
    <AdminLayout>
   <NextStudio config={config} />
   </AdminLayout>
   )
}