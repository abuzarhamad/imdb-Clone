"use client"
import React, { useEffect, useState } from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { useTheme } from 'next-themes'

export default function Darkmodeswitch() {
  const { theme, setTheme, systemTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

if (!mounted) return null;
  return (
    <div>
      {
        currentTheme === 'dark' ?
          <MdLightMode className='text-xl cursor-pointer hover:text-amber-500' onClick={() => setTheme('light')} /> :
          <MdDarkMode className='text-xl cursor-pointer hover:text-amber-500' onClick={() => setTheme('dark')} />
      }
    </div>
  )
}
