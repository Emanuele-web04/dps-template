import Link from 'next/link';
import { FiAlertTriangle } from 'react-icons/fi';
import { LuMail, LuHouse } from 'react-icons/lu';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full p-6 md:p-12 bg-white rounded-3xl ring-1 ring-neutral-300 max-w-xl text-center space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex flex-col gap-7 w-full justify-center items-center">
            <div className="bg-gray-100 rounded-full">
              <LuMail className="text-3xl m-4 text-gray-600" />
            </div>
            <h1 className="text-2xl md:text-3xl font-sans tracking-tight font-semibold text-black">
              Unsubscribe Link Not Found
            </h1>
          </div>
          <p className="text-gray-700 font-inter tracking-tight">
            This unsubscribe link is invalid, expired, or the email has already been removed from our mailing list.
          </p>
        </div>

        {/* Error Message Display */}
        <div className="py-3 px-4 bg-red-50 rounded-2xl ring-1 ring-red-200">
          <p className="text-xs tracking-wider text-red-500 uppercase mb-1">
            Error
          </p>
          <p className="font-inter font-semibold text-base tracking-tight text-red-700">
            Link Not Found
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Link href="/">
          <button className="cursor-pointer w-full p-4 ring-1 ring-gray-300 text-black font-inter rounded-2xl font-semibold hover:bg-gray-50 transition-colors">
              <LuHouse className="w-4 h-4 mr-2 inline" />
              Return Home
            </button>
          </Link>

          <Link href="/contact">
            <button className="cursor-pointer w-full p-4  text-black font-inter font-normal text-sm hover:bg-gray-50 transition-colors">
              Contact Support
            </button>
          </Link>
        </div>

        {/* Footer */}
        <span className="inline-flex w-full h-[1px] bg-gray-200"></span>
        <div className="flex text-sm font-inter tracking-tight items-center w-full justify-center gap-2">
          Still receiving emails?
          <Link
            href="mailto:emandipietro@gmail.com"
            className="text-xs text-gray-500 hover:text-black transition-colors underline"
          >
            Contact us directly
          </Link>
        </div>
      </div>
    </div>
  );
}