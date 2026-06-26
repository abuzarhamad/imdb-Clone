

// "use client";

// import React from "react";
// import { ThemeProvider } from "next-themes";

// export default function Providers({ children }) {
//   return (
//     <ThemeProvider 
//       defaultTheme="system" 
//       attribute="class" 
//       enableSystem
//     >
//       {children}
//     </ThemeProvider>
//   );
// }







"use client"
import React from 'react'
import { ThemeProvider } from 'next-themes'

// Intercept and hide the React 19 next-themes script warning overlay
if (typeof window !== "undefined") {
  const originalError = console.error;
  console.error = (...args) => {
    if (args?.toString().includes("Encountered a script tag while rendering React component")) {
      return;
    }
    originalError(...args);
  };
}

export default function Providers({ children }) {
    return (
        <ThemeProvider defaultTheme='system' attribute='class' >
            <div className='text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen transition-colors duration-300 '>
                {children}
            </div>
        </ThemeProvider>
    )
}
