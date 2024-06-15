import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/app/context/AuthContext";

const Profile = () => {
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    signOut();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!user) {
    return null; // or return a loading indicator or a message saying "User not logged in"
  }

  return (
    <>
      <button className="flex flex-col" onClick={toggleMenu}>
        <Avatar>
          <AvatarImage src={user.photoURL} alt={user.displayName} />
        </Avatar>
      </button>
      <div
        className={`flex flex-col gap-y-2 rounded-md border bg-popover pb-2 pt-3 absolute md:right-24 md:top-20 right-4 top-16 ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <div className="mb-1 flex items-center gap-x-3 px-3">
          <Avatar>
            <AvatarImage src={user.photoURL} alt={user.displayName} />
            <AvatarFallback>{user.displayName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="mr-4 flex flex-col md:mr-8">
            <h1 className="text-sm font-medium text-popover-foreground">
              {user.displayName}
            </h1>
            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>
        </div>
        <div className="flex flex-col px-3 py-2">
          <hr />
        </div>
        <div className="flex flex-col px-3">
          <button
            onClick={handleLogout}
            className="text-sm hover:underline text-left flex gap-x-2 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
              />
            </svg>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
