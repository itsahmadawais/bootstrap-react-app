import React from 'react'
import {
    FaGithubAlt,
    FaCloudDownloadAlt
} from 'react-icons/fa';
export default function PgHome() {
  return (
    <main className=''>
        <div className='container h-screen'>
            <div className='row h-100 items-center'>
                <div className='col-md-8 m-auto text-center'>
                    <h1 className='fw-bold'>Hi! Welcome to Bootstrap React App!</h1>
                    <p>Welcome to our React app built with Bootstrap and React-Bootstrap. This app utilizes the power of React Router DOM to navigate seamlessly between pages.</p>
                    <a href='https://github.com/itsahmadawais' target='_blank' className='btn btn-dark me-2'>
                        <FaGithubAlt className='me-2'/>
                        Follow on Github</a>
                        <a href='https://github.com/itsahmadawais/bootstrap-react-app' target='_blank' className='btn btn-info text-white'>
                        <FaCloudDownloadAlt className='me-2'/>
                        Download App</a>
                </div>
            </div>
        </div>
    </main>
  )
}
