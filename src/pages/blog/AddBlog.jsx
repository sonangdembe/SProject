import React from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { Layout } from '../../components/layout/Layout'
import { Form } from './components/form/Form'

export const AddBlog = () => {
  return (
   <>
  <Layout>
    <Form type='Create' />
  </Layout>
   </>
  )
}
