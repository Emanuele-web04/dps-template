import React from 'react'

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
      <div className="flex flex-col items-center space-y-6">
        {/* Main spinner */}
        <div className="relative">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 dark:border-gray-800"></div>
          <div className="absolute inset-0 h-12 w-12 animate-spin rounded-full border-4 border-black border-t-transparent dark:border-white dark:border-t-transparent"></div>
        </div>
        
        {/* Loading text with fade animation */}
        <div className="flex items-center space-x-1">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Loading</span>
          <div className="flex space-x-1">
            <div className="h-1 w-1 animate-pulse rounded-full bg-gray-400 dark:bg-gray-600" style={{ animationDelay: '0ms' }}></div>
            <div className="h-1 w-1 animate-pulse rounded-full bg-gray-400 dark:bg-gray-600" style={{ animationDelay: '150ms' }}></div>
            <div className="h-1 w-1 animate-pulse rounded-full bg-gray-400 dark:bg-gray-600" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}