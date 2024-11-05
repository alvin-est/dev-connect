import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

export default function RegistrationForm() {
  return (
    <form className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="space-y-12">
        {/* Profile Section */}
        <div className="border-b border-gray-300 pb-12">
          <h2 className="text-base font-semibold text-gray-900">Profile</h2>
          <p className="mt-1 text-sm text-gray-600">
            This information will be displayed publicly, so be careful what you share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-900">
                Username
              </label>
              <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 sm:max-w-md">
                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                  workcation.com/
                </span>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="janesmith"
                  autoComplete="username"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium text-gray-900">
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  placeholder="Write a few sentences about yourself."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Personal Information Section */}
        <div className="border-b border-gray-300 pb-12">
          <h2 className="text-base font-semibold text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>

          <div className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                autoComplete="given-name"
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                autoComplete="family-name"
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              />
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="border-b border-gray-300 pb-12">
          <h2 className="text-base font-semibold text-gray-900">Notifications</h2>
          <p className="mt-1 text-sm text-gray-600">Choose your notification preferences.</p>
          <div className="mt-10">
            <div className="flex items-center gap-x-3">
              <input
                id="push-everything"
                name="notifications"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label htmlFor="push-everything" className="text-sm font-medium text-gray-900">
                Everything
              </label>
            </div>
            <div className="flex items-center gap-x-3 mt-4">
              <input
                id="push-email"
                name="notifications"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label htmlFor="push-email" className="text-sm font-medium text-gray-900">
                Only Email
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
        >
          Register
        </button>
      </div>
    </form>
  );
}