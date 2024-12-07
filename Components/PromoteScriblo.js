'use client'
import { copyToClipboard } from '@/public/util/helpers'
import React from 'react'

function Promotereedboss() {
  return (
    <div className='promotereedbossContainer'>
        <div className="reedbossBanner"></div>
        <h3>Spread the Word, Amplify Your Voice!</h3>
        <p>Help us grow and empower more writers by sharing reedboss with your network. Together, we can build a vibrant community of readers and creators.</p>

        <button onClick={() => {
          copyToClipboard("https://myreedboss.com")
          alert("Link copied to clipboard")
        }}>Share reedboss</button>
    </div>
  )
}

export default Promotereedboss