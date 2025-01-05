import { GitHubIcon } from "../Icons";

export const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            VC Holder Binding Playground
          </h1>
          <div className="flex items-center space-x-6">
            <a
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Demo
            </a>
            <a
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Document
            </a>
            <a
              href="https://github.com/dorakemon/vc-holder-binding-playground"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <GitHubIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
