import { BookmarkSimple, ChatsCircle, HandsClapping, IconContext } from "@phosphor-icons/react";
import Header from "../components/Header";
import React from "react";
import ProfileDetail from "../components/ProfileDetail";
import EditableProfile from "../components/EditableProfile";

const Profile = () => {

  const [isEditable, setEditable] = React.useState(false);

  const handleEditProfile =
  (stats: boolean = false) =>
  () => {
    setEditable(stats);
  };

  // eslint-disable-next-line prefer-const
  let content = (<ProfileDetail onEdit={handleEditProfile(true)}/>);

  if (isEditable) {
    content = <EditableProfile onCancel={handleEditProfile(false)} />
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto">
        
        <div className="flex gap-16 px-4">
        
          <div className="grow py-14">
            <div>
                <span className="font-bold text-4xl text-[#3D3D3D]">Tomioka Giyu</span>
            </div>
            {/* tabs */}
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-40
            0 dark:border-gray-700">
              <ul className="flex flex-wrap gap-4 -mb-px">
                <li className="me-2">
                  <a
                    href="#"
                    className="font-bold inline-block py-4 border-b-2 border-[#3d3d3d] rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  >
                    Your Articles
                  </a>
                </li>
                <li className="me-2">
                  <a
                    href="#"
                    className="inline-block py-4 border-b-2 border-transparent opacity-75 rounded-t-lg text-[#6d6d6d] hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    aria-current="page"
                  >
                    Saved Articles
                  </a>
                </li>
              </ul>
            </div>

            {/* article */}
            <div className="py-10">
              <div className="flex gap-8">
                {/* article banner */}
                <div className="grow">
                  <img
                    alt="article image"
                    className="w-[100%] block rounded-lg"
                    src="https://s3-alpha-sig.figma.com/img/fbbd/1004/9cf87f621bbb637f67dc3f86d8eb7c0c?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SSF2lZLTyAXDsS6p~oVXtUnBgdnfrpiVjYuws25cPqyRS1Vsm5W-Fhewe8dVZ5CDqGz9P9Sr6aVfrXxz0CkRXctnH8f1IsCRYHQtGYTYju53jB3AiI4DQi6wcugixGwMwqxQx0WtDu3SppA~da~KN~G5OtbrjrrGUqsPV8UhmpGLoG4~7Tp8DlDsQu0Ax1HrDL4THf9qNvokKdpHxh1USO0B7WMfniD4pzHm~PZnzZD36aT~daIwXm5utC2PHFtSFy6exXzYlvXkyZw2RgrfG92ogINIIEbzq6Gba7T0JMxPkOsCLAkeWPYGFxBsV8lY1LEkOhsDKF6GpMzRaWI7hA__"
                  />
                </div>

                {/* article snapshot */}
                <IconContext.Provider
                  value={{ size: "20px", color: "#F42534" }}
                >
                  <div className="grow-2 flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                      {/* avatar */}
                      <div className="flex items-center gap-2">
                        <img
                          className="w-6 rounded-full"
                          src="https://s3-alpha-sig.figma.com/img/11db/cb98/2f9ba115c7d5cc790cc48a457815fb67?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bmyQ8PD~U7XIpJu7gryBKa8ILmsPaBoSoA39AyIGYCYrkXbPCsMe9w6exnVzITWgDx9fEMc9thTFYh~ydCNgbSxXnrCl~mkKrKA4~VZyBNXygKDml7~wQF0bXI88vLTwps854CfFk47N5lLwZXB2jmLaMtxt6v5Gn9IMjEkz2l--VUn2qdQ6~woetX87qnA4xCK9xZhIZsPymr4oOScWq-yXhRdBUR3~mRghY7VikRQxHc7lR89mD~oMG-dd9jNGmTZ~8rihFeAhcNgATsj8CcGPia95mUHOCfo1r6YH5bCReRXKc4inh53dQ00xa~s8HESwKlsYr8RcAMuh0fVZ9Q__"
                        />
                        <p className="text-sm">Erika Albright</p>
                      </div>
                      <a href="#">
                        <BookmarkSimple />
                      </a>
                    </div>
                    <h2
                      className="text-3xl font-bold cursor-pointer"
                    >
                      Designing for Impact: 6 Ideas to Enhance the User
                      Experience and Accessibility of Your Power BI...
                    </h2>
                    <p>
                      A Journey Through the Design of an Equity, Diversity and
                      Inclusion Power BI Dashboard.
                    </p>
                    <div className="flex flex-col grow justify-end">
                      <div className="flex items-center gap-4">
                        <p>Mar 3</p>
                        <div className="flex items-center gap-2">
                          <HandsClapping />
                          <span>40</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ChatsCircle />
                          <span>100</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </IconContext.Provider>
              </div>
            </div>
          </div>
          {content}
        </div>
      </main>
    </div>
  );
};

export default Profile;
