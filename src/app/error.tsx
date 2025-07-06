'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
import Link from 'next/link'
import { FiAlertTriangle } from 'react-icons/fi'
import { LuHouse, LuRefreshCw } from 'react-icons/lu'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className="min-h-screen grid-bg flex items-center justify-center p-6">
      <div className="w-full p-6 md:p-12 bg-white rounded-3xl ring-1 ring-neutral-300 max-w-xl text-center space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex flex-col gap-7 w-full justify-center items-center">
            <div className="bg-red-100 rounded-full">
              <FiAlertTriangle className="text-3xl m-4 text-red-600" />
            </div>
            <h1 className="text-2xl md:text-3xl font-sans tracking-tight font-semibold text-black">
              Something Went Wrong
            </h1>
          </div>
          <p className="text-gray-700 font-inter tracking-tight">
            We encountered an unexpected error while processing your request. Please try again or contact support if the problem persists.
          </p>
        </div>

        {/* Error Message Display */}
        <div className="py-3 px-4 bg-red-50 rounded-2xl ring-1 ring-red-200">
          <p className="text-xs tracking-wider text-red-500 uppercase mb-1">
            Error Details
          </p>
          <p className="font-inter font-semibold text-base tracking-tight text-red-700">
            {error.message || 'An unexpected error occurred'}
          </p>
          {error.digest && (
            <p className="font-inter text-xs tracking-tight text-red-600 mt-1">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex sm:flex-col w-full justify-center items-center">
          <button 
            onClick={() => reset()}
            className="cursor-pointer h-fit flex gap-1 items-center justify-center w-fit sm:w-full p-3.5 py-2 sm:py-3.5 ring-1 ring-gray-300 text-black font-inter rounded-xl md:rounded-2xl font-semibold hover:bg-gray-50 transition-colors"
          >
            <LuRefreshCw className="w-4 h-4 mr-2 inline" />
           <p className='font-inter font-semibold tracking-tight'>Try Again</p>
          </button>

          <Link href="/">
            <button className="cursor-pointer flex items-center justify-center w-fit p-4 text-black font-inter font-normal text-sm hover:bg-gray-50 transition-colors">
              <LuHouse className="w-4 h-4 mr-2 inline" />
              Return Home
            </button>
          </Link>
        </div>

        {/* Footer */}
        <span className="inline-flex w-full h-[1px] bg-gray-200"></span>
        <div className="flex text-sm font-inter tracking-tight items-center w-full justify-center gap-2">
          Need help?
          <Link
            href="/contact"
            className="text-xs text-gray-500 hover:text-black transition-colors underline"
          >
            Contact support
          </Link>
        </div>
      </div>
    </div>
  )
}