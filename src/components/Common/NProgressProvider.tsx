'use client'

import React, { Suspense } from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
const NProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Suspense>
            {children}
            <ProgressBar
                height="4px"
                color="#fff"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </Suspense>
    )
}

export default NProgressProvider