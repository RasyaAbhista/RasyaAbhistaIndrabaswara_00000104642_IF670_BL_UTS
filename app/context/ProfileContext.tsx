import React, { createContext, useContext, useState } from "react";

type ProfileType = {
  name: string;
  nim: string;
  email: string;
  image: string | null;
  major: string;
  dob: string;
  classOf: string;
  gender: string;
};

type ProfileContextType = {
  profile: ProfileType;
  setProfile: (data: ProfileType) => void;
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({ children }: any) => {
  const [profile, setProfile] = useState<ProfileType>({
    name: "Rasya Abhista Indrabaswara",
    nim: "00000104642",
    email: "rasya.abhista@student.umn.ac.id",
    image: null,
    major: "Informatics",
    dob: "31/03/2005",
    classOf: "23",
    gender: "male",
  });

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) throw new Error("useProfile must be used inside provider");
  return context;
};
