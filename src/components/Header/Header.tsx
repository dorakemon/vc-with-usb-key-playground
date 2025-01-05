import Link from "next/link";
import { GitHubIcon } from "../Icons";

export const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl text-gray-900">
            Verifiable Credentials with USB Key
          </h1>
          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              Demo
            </Link>
            <Link
              href="/"
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              Document
            </Link>
            <Link
              href="/debug"
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              Debug
            </Link>
            <Link
              href="https://github.com/dorakemon/vc-with-usb-key-playground"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              <GitHubIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
