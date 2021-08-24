import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  CodeIcon,
  DotsVerticalIcon,
  FlagIcon,
  StarIcon,
} from "@heroicons/react/solid";
import clsx from "clsx";

const menuItems = [
  { Icon: StarIcon, label: "Add to favorites", link: "#" },
  { Icon: CodeIcon, label: "Embed", link: "#" },
  { Icon: FlagIcon, label: "Report content", link: "#" },
];

function PostHeader({ name, time }) {
  return (
    <header className="flex space-x-3">
      <div className="flex-shrink-0">
        <img
          className="h-10 w-10 rounded-full"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt={`Avatar of ${name}`}
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-gray-900">
          <a href="#" className="hover:underline">
            {name}
          </a>
        </p>
        <p className="text-sm text-gray-500">
          <time>{time}</time>
        </p>
      </div>
      <div className="flex-shrink-0 self-center flex">
        {/* TODO: TD082321 separate menu into component */}
        <Menu as="div" className="relative z-30 inline-block text-left">
          <div>
            <Menu.Button className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600">
              <span className="sr-only">Open options</span>
              <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {menuItems.map((item) => (
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href={item.link}
                        className={clsx(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "flex px-4 py-2 text-sm"
                        )}
                      >
                        <item.Icon
                          className="mr-3 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span>{item.label}</span>
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  );
}

export default function Post() {
  const { name, time } = {
    name: "Chelsea Hagon",
    time: "December 9 at 11:43 AM",
  }; // TODO: replace me!
  return (
    <li className="list-none flex flex-col min-w-96 max-h-screen h-192 max-w-screen-md bg-white rounded-md shadow px-4 py-5 sm:px-6">
      <PostHeader name={name} time={time} />
      <div className="relative p-4">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
      </div>
      <div className="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:aspect-none">
        <img
          className="w-full object-center object-cover lg:w-full"
          src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=912&q=80"
        />
      </div>
    </li>
  );
}
