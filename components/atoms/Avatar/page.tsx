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
        <div className="flex flex-col px-3">
          <button
            onClick={handleLogout}
            className="text-sm hover:underline text-left"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
