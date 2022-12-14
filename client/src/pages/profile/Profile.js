import React, { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/authContext";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const username = currentUser?.user_name;
  const userimg = currentUser?.user_img;
  const useremail = currentUser?.user_email;
  const userdesc = currentUser?.user_desc;
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="w-10/12 mt-5">
          <div>User name: {username}</div>
          <div>
            <img
              src={
                userimg ||
                "https://www.seekpng.com/png/small/966-9665317_placeholder-image-person-jpg.png"
              }
              alt="img"
              placeholder=""
              className="w-[120px] h-[120px] rounded-full"
            />
          </div>
          <div>User Email: {useremail}</div>
          <div>User Description: {userdesc}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
