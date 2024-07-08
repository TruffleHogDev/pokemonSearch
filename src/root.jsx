import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { router } from './router.jsx'
import './index.css'
import Search from './routes/index.jsx'

function Root() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter router={router}>
      <Search />
      </BrowserRouter>
      </Suspense>
    </>
  )
}

export default Root
