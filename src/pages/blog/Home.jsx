import React from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { Layout } from '../../components/layout/Layout'
import { Card } from './components/cards/Card'

export const Home = () => {
  return (
   <>
   <Layout>
   <div className = 'flex flex-wrap mt-6 justify-center space-x-5'>
   
    <Card className='mb-4'/>
    <Card className='mb-4'/>
    <Card/>
    <Card/>
   </div>
   </Layout>
   </>
  )
}
