import React from 'react'
import Link from 'next/link'

export default function Headeritems({ title, address, icon }) {
    return (
        <div>
            <Link href={address} className='hover:text-amber-500  '>
                <p className='text-2xl sm:hidden'>{icon}</p>
                <p className='uppercase hidden sm:inline text-sm'>{title}</p>
            </Link>
        </div>
    )
}
