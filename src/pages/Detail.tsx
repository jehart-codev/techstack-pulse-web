import Header from "../components/Header";
import * as React from "react";
import {
  BookmarkSimple,
  CaretDown,
  ChatsCircle,
  HandsClapping,
  IconContext,
  XCircle,
} from "@phosphor-icons/react";
import Drawer from "@mui/material/Drawer";
import { TextField } from "@mui/material";

const Detail = () => {
  const [open, setOpen] = React.useState(false);
  const [isSeeMore, setSeeMore] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const toggleSeeMore =
    (stats: boolean = false) =>
    () => {
      setSeeMore(stats);
    };
  const openDrawer = () => {
    console.log("open drawer");
  };

  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  return (
    <div>
      <main className="container mx-auto overlay">
        <Header />
        <Drawer
          open={open}
          onClose={toggleDrawer(false)}
          anchor="right"
          PaperProps={{ width: "90%" }}
          className="w-100"
        >
          <div className="w-[424px] p-5 mt-4">
            <div className="flex justify-between items-center">
              <span className="text-[#3D3D3D] font-semibold text-[20px] leading-7">
                Responses (54)
              </span>
              <XCircle
                size={32}
                className="cursor-pointer"
                onClick={toggleDrawer(false)}
              />
            </div>
            {/* Text Area for posting comment */}
            <div className="w-full shadow-[0_4px_12px_0px_rgba(0,0,0,0.1)] rounded-md p-3 mt-7">
              <div className="w-full flex items-center">
                <img
                  className="w-[40px] h-[40px] rounded-full"
                  src="https://s3-alpha-sig.figma.com/img/11db/cb98/2f9ba115c7d5cc790cc48a457815fb67?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bmyQ8PD~U7XIpJu7gryBKa8ILmsPaBoSoA39AyIGYCYrkXbPCsMe9w6exnVzITWgDx9fEMc9thTFYh~ydCNgbSxXnrCl~mkKrKA4~VZyBNXygKDml7~wQF0bXI88vLTwps854CfFk47N5lLwZXB2jmLaMtxt6v5Gn9IMjEkz2l--VUn2qdQ6~woetX87qnA4xCK9xZhIZsPymr4oOScWq-yXhRdBUR3~mRghY7VikRQxHc7lR89mD~oMG-dd9jNGmTZ~8rihFeAhcNgATsj8CcGPia95mUHOCfo1r6YH5bCReRXKc4inh53dQ00xa~s8HESwKlsYr8RcAMuh0fVZ9Q__"
                />
                <p className="ml-2 font-semibold text-[16px] text-neutral-900">
                  Erika Albright
                </p>
              </div>
              <TextField
                autoFocus={false}
                multiline={true}
                className="border-none outline-none focus:outline-none w-full"
                placeholder="What are your thoughts"
                sx={{
                  "& fieldset": { border: "none" },
                }}
                rows={3}
              ></TextField>
              <div className="flex justify-end py-2">
                <button className="w-20 rounded-lg font-normal text-[14px] align-middle text-[#FF2E3D]">
                  Cancel
                </button>
                <button className="ml-2 w-20 rounded-[48px] bg-[#FF2E3D] font-normal text-[14px] text-[#FFFFFF] py-2 px-3">
                  Respond
                </button>
              </div>
            </div>

            {/* Comments section */}
            <div className="flex mt-7 align-middle items-center">
              <span className="font-semibold text-base text-[#1F1F1F]">
                Most Relevant{" "}
              </span>
              <CaretDown
                size={20}
                className="text-[#737373] ml-2 cursor-pointer"
              />
            </div>

            {/* Loop each comments */}
            <div className="mt-6">
              {/* avatar */}
              <div className="flex items-center gap-2">
                <img
                  className="w-[40px] h-[40px] rounded-full"
                  src="https://s3-alpha-sig.figma.com/img/11db/cb98/2f9ba115c7d5cc790cc48a457815fb67?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bmyQ8PD~U7XIpJu7gryBKa8ILmsPaBoSoA39AyIGYCYrkXbPCsMe9w6exnVzITWgDx9fEMc9thTFYh~ydCNgbSxXnrCl~mkKrKA4~VZyBNXygKDml7~wQF0bXI88vLTwps854CfFk47N5lLwZXB2jmLaMtxt6v5Gn9IMjEkz2l--VUn2qdQ6~woetX87qnA4xCK9xZhIZsPymr4oOScWq-yXhRdBUR3~mRghY7VikRQxHc7lR89mD~oMG-dd9jNGmTZ~8rihFeAhcNgATsj8CcGPia95mUHOCfo1r6YH5bCReRXKc4inh53dQ00xa~s8HESwKlsYr8RcAMuh0fVZ9Q__"
                />
                <div>
                  <div className="flex leading-[20px]">
                    <p className="font-semibold text-[16px] text-[#3D3D3D]">
                      Erika Albright{" "}
                    </p>
                  </div>
                  <div className="font-normal flex text-[14px] text-[#6D6D6D]">
                    <label>about a minute ago (edited)</label>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p
                  className={
                    "font-normal text-sm overflow-hidden overflow-ellipsis " +
                    (!isSeeMore ? "line-clamp-5" : "")
                  }
                >
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate
                  facilisi ullamcorper facilisis hac velit sem viverra etiam.
                  Urna ornare facilisi potenti cursus donec ligula. Placerat
                  nisi vestibulum nascetur finibus ac; tellus class. In ultrices
                  conubia amet sem ultrices quam ullamcorper. Adipiscing quisque
                  blandit phasellus blandit mollis tortor volutpat laoreet.
                  Fames pharetra facilisis velit curae odio habitant commodo
                  nam. Feugiat condimentum hac inceptos taciti faucibus
                  tristique. Fermentum odio faucibus lectus, himenaeos class
                  vulputate lacinia. Cursus penatibus per sollicitudin phasellus
                  neque ad placerat. Elit torquent quam integer auctor ultrices
                  vehicula lobortis duis. Imperdiet lectus luctus mus lacus
                  magnis posuere vitae. Cubilia montes natoque arcu finibus est
                  nec magna. Odio morbi eleifend conubia; egestas varius
                  torquent potenti. Ut lorem ut, aliquet parturient posuere
                  ornare augue dolor. Nullam vel purus maximus vivamus mollis eu
                  nunc ridiculus. Tortor congue blandit lobortis dignissim etiam
                  vulputate turpis nascetur. Fames diam quis platea arcu rutrum.
                  Turpis suscipit dictumst condimentum dui, lacinia non.
                  Elementum vitae habitant tortor aenean neque integer duis. Ad
                  nisi adipiscing dui per dictumst condimentum. Ut sed efficitur
                  magnis molestie imperdiet curae sodales. Etiam leo sem
                  eleifend eget auctor dictumst justo fringilla. Netus
                  vestibulum platea leo habitant quisque.
                </p>
                <button
                  className="font-normal text-sm text-[#FF2E3D]"
                  onClick={toggleSeeMore(true)}
                >
                  See more
                </button>
              </div>
              <div className="flex flex-rows justify-between items-center mt-2">
                {/* Comments action */}
                <div className="flex items-center">
                  <IconContext.Provider
                    value={{ size: "24px", color: "#F42534" }}
                  >
                    <span className="flex mr-3 font-normal text-base text-[#6D6D6D] cursor-pointer">
                      <HandsClapping className="mr-2" /> 40
                    </span>
                    <span
                      onClick={toggleDrawer(true)}
                      className="flex mr-3 font-normal text-base text-[#6D6D6D] cursor-pointer"
                    >
                      <ChatsCircle weight="duotone" className="mr-2" /> 5
                    </span>
                  </IconContext.Provider>
                </div>
                <div>
                  <button className="text-sm font-normal text-[#1F1F1F]">
                    Reply
                  </button>
                </div>
              </div>

              {/* Reply to its comments */}

              <div className="border-[#FFC3C7] border-l-4">
                {items.map((item, index) => (
                  <div key={index} className="mt-6 px-5">
                    {/* avatar */}
                    <div className="flex items-center gap-2">
                      <img
                        className="w-[40px] h-[40px] rounded-full"
                        src="https://s3-alpha-sig.figma.com/img/11db/cb98/2f9ba115c7d5cc790cc48a457815fb67?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bmyQ8PD~U7XIpJu7gryBKa8ILmsPaBoSoA39AyIGYCYrkXbPCsMe9w6exnVzITWgDx9fEMc9thTFYh~ydCNgbSxXnrCl~mkKrKA4~VZyBNXygKDml7~wQF0bXI88vLTwps854CfFk47N5lLwZXB2jmLaMtxt6v5Gn9IMjEkz2l--VUn2qdQ6~woetX87qnA4xCK9xZhIZsPymr4oOScWq-yXhRdBUR3~mRghY7VikRQxHc7lR89mD~oMG-dd9jNGmTZ~8rihFeAhcNgATsj8CcGPia95mUHOCfo1r6YH5bCReRXKc4inh53dQ00xa~s8HESwKlsYr8RcAMuh0fVZ9Q__"
                      />
                      <div>
                        <div className="flex leading-[20px]">
                          <p className="font-semibold text-[16px] text-[#3D3D3D]">
                            Erika Albright{" "}
                          </p>
                        </div>
                        <div className="font-normal flex text-[14px] text-[#6D6D6D]">
                          <label>about a minute ago</label>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p
                        className={
                          "font-normal text-sm overflow-hidden overflow-ellipsis " +
                          (!isSeeMore ? "line-clamp-5" : "")
                        }
                      >
                        Lorem ipsum odor amet, consectetuer adipiscing elit.
                        Vulputate facilisi ullamcorper facilisis hac velit sem
                        viverra etiam.
                      </p>
                    </div>
                    <div className="flex flex-rows justify-between items-center mt-2">
                      {/* Comments action */}
                      <div className="flex items-center">
                        <IconContext.Provider
                          value={{ size: "24px", color: "#F42534" }}
                        >
                          <span className="flex mr-3 font-normal text-base text-[#6D6D6D] cursor-pointer">
                            <HandsClapping className="mr-2" /> 40
                          </span>
                        </IconContext.Provider>
                      </div>
                      <div>
                        <button className="text-sm font-normal text-[#1F1F1F]">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Drawer>
        <div className="grow py-8 max-w-4xl mx-auto">
          {/* article */}
          <div className="gap-8 ">
            <div className="text-center">
              <h1 className="font-bold text-[44px] leading-10 text-[#3D3D3D]">
                Key takeaways from Airbnb's winter redesign
              </h1>
            </div>
            <div className="flex flex-rows justify-between items-center mt-12 border-b border-[#E7E7E7] pb-6">
              {/* avatar */}
              <div className="flex items-center gap-2">
                <img
                  className="w-[40px] h-[40px] rounded-full"
                  src="https://s3-alpha-sig.figma.com/img/11db/cb98/2f9ba115c7d5cc790cc48a457815fb67?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bmyQ8PD~U7XIpJu7gryBKa8ILmsPaBoSoA39AyIGYCYrkXbPCsMe9w6exnVzITWgDx9fEMc9thTFYh~ydCNgbSxXnrCl~mkKrKA4~VZyBNXygKDml7~wQF0bXI88vLTwps854CfFk47N5lLwZXB2jmLaMtxt6v5Gn9IMjEkz2l--VUn2qdQ6~woetX87qnA4xCK9xZhIZsPymr4oOScWq-yXhRdBUR3~mRghY7VikRQxHc7lR89mD~oMG-dd9jNGmTZ~8rihFeAhcNgATsj8CcGPia95mUHOCfo1r6YH5bCReRXKc4inh53dQ00xa~s8HESwKlsYr8RcAMuh0fVZ9Q__"
                />
                <div>
                  <div className="flex leading-[20px]">
                    <p className="font-semibold text-[16px] text-[#3D3D3D]">
                      Erika Albright{" "}
                    </p>
                    <li className="bullet-color font-normal text-[14px] text-[#FF2E3D] ml-2 cursor-pointer">
                      Follow
                    </li>
                  </div>
                  <div className="font-normal flex text-[14px] text-[#6D6D6D]">
                    <label>8 minutes</label>
                    <li className="ml-2">July 5, 2019</li>
                  </div>
                </div>
              </div>
              {/* article actions */}
              <div className="flex">
                <IconContext.Provider
                  value={{ size: "24px", color: "#F42534" }}
                >
                  <span className="flex mr-3 font-normal text-[16px] text-[#6D6D6D] cursor-pointer">
                    <HandsClapping className="mr-2" /> 40
                  </span>
                  <span
                    onClick={toggleDrawer(true)}
                    className="flex mr-3 font-normal text-[16px] text-[#6D6D6D] cursor-pointer"
                  >
                    <ChatsCircle weight="duotone" className="mr-2" /> 5
                  </span>
                  <span className="flex cursor-pointer">
                    <BookmarkSimple />
                  </span>
                </IconContext.Provider>
              </div>
            </div>
            {/* article banner */}
            <div className="flex justify-around grow mt-7">
              <img
                alt="article image"
                className="w-[100%] h-[30%] block rounded-lg"
                src="https://s3-alpha-sig.figma.com/img/fbbd/1004/9cf87f621bbb637f67dc3f86d8eb7c0c?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SSF2lZLTyAXDsS6p~oVXtUnBgdnfrpiVjYuws25cPqyRS1Vsm5W-Fhewe8dVZ5CDqGz9P9Sr6aVfrXxz0CkRXctnH8f1IsCRYHQtGYTYju53jB3AiI4DQi6wcugixGwMwqxQx0WtDu3SppA~da~KN~G5OtbrjrrGUqsPV8UhmpGLoG4~7Tp8DlDsQu0Ax1HrDL4THf9qNvokKdpHxh1USO0B7WMfniD4pzHm~PZnzZD36aT~daIwXm5utC2PHFtSFy6exXzYlvXkyZw2RgrfG92ogINIIEbzq6Gba7T0JMxPkOsCLAkeWPYGFxBsV8lY1LEkOhsDKF6GpMzRaWI7hA__"
              />
            </div>
            {/* Content of the Article */}
            <div className="font-normal text-[20px] text-[#3D3D3D] mt-8">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate
              facilisi ullamcorper facilisis hac velit sem viverra etiam. Urna
              ornare facilisi potenti cursus donec ligula. Placerat nisi
              vestibulum nascetur finibus ac; tellus class. In ultrices conubia
              amet sem ultrices quam ullamcorper. Adipiscing quisque blandit
              phasellus blandit mollis tortor volutpat laoreet. Fames pharetra
              facilisis velit curae odio habitant commodo nam. Feugiat
              condimentum hac inceptos taciti faucibus tristique. Fermentum odio
              faucibus lectus, himenaeos class vulputate lacinia. Cursus
              penatibus per sollicitudin phasellus neque ad placerat. Elit
              torquent quam integer auctor ultrices vehicula lobortis duis.
              Imperdiet lectus luctus mus lacus magnis posuere vitae. Cubilia
              montes natoque arcu finibus est nec magna. Odio morbi eleifend
              conubia; egestas varius torquent potenti. Ut lorem ut, aliquet
              parturient posuere ornare augue dolor. Nullam vel purus maximus
              vivamus mollis eu nunc ridiculus. Tortor congue blandit lobortis
              dignissim etiam vulputate turpis nascetur. Fames diam quis platea
              arcu rutrum. Turpis suscipit dictumst condimentum dui, lacinia
              non. Elementum vitae habitant tortor aenean neque integer duis. Ad
              nisi adipiscing dui per dictumst condimentum. Ut sed efficitur
              magnis molestie imperdiet curae sodales. Etiam leo sem eleifend
              eget auctor dictumst justo fringilla. Netus vestibulum platea leo
              habitant quisque.
            </div>
            {/* Tagging */}
            <div className="pt-5 mt-5 border-t border-b border-[#E7E7E7] pb-6">
              <div className="pt-5">
                <span className="bg-[#F6F6F6] p-3 rounded-full m-1">
                  Events
                </span>
                <span className="bg-[#F6F6F6] p-3 rounded-full m-1">
                  Technology
                </span>
                <span className="bg-[#F6F6F6] p-3 rounded-full m-1">Games</span>
                <span className="bg-[#F6F6F6] p-3 rounded-full m-1">
                  Lifestyle
                </span>
                <span className="bg-[#F6F6F6] p-3 rounded-full m-1">
                  Relationship
                </span>
              </div>
              <div className="flex flex-rows justify-between items-center mt-12">
                {/* avatar */}
                <div className="flex items-center gap-2">
                  <img
                    className="w-[40px] h-[40px] rounded-full"
                    src="https://s3-alpha-sig.figma.com/img/11db/cb98/2f9ba115c7d5cc790cc48a457815fb67?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bmyQ8PD~U7XIpJu7gryBKa8ILmsPaBoSoA39AyIGYCYrkXbPCsMe9w6exnVzITWgDx9fEMc9thTFYh~ydCNgbSxXnrCl~mkKrKA4~VZyBNXygKDml7~wQF0bXI88vLTwps854CfFk47N5lLwZXB2jmLaMtxt6v5Gn9IMjEkz2l--VUn2qdQ6~woetX87qnA4xCK9xZhIZsPymr4oOScWq-yXhRdBUR3~mRghY7VikRQxHc7lR89mD~oMG-dd9jNGmTZ~8rihFeAhcNgATsj8CcGPia95mUHOCfo1r6YH5bCReRXKc4inh53dQ00xa~s8HESwKlsYr8RcAMuh0fVZ9Q__"
                  />
                  <div>
                    <div className="flex leading-[20px]">
                      <p className="font-semibold text-[16px] text-[#3D3D3D]">
                        Erika Albright{" "}
                      </p>
                      <li className="bullet-color font-normal text-[14px] text-[#FF2E3D] ml-2 cursor-pointer">
                        Follow
                      </li>
                    </div>
                    <div className="font-normal flex text-[14px] text-[#6D6D6D]">
                      <label>8 minutes</label>
                      <li className="ml-2">July 5, 2019</li>
                    </div>
                  </div>
                </div>
                {/* article actions */}
                <div className="flex">
                  <IconContext.Provider
                    value={{ size: "24px", color: "#F42534" }}
                  >
                    <span className="flex mr-3 font-normal text-[16px] text-[#6D6D6D] cursor-pointer">
                      <HandsClapping className="mr-2" /> 40
                    </span>
                    <span
                      onClick={openDrawer}
                      className="flex mr-3 font-normal text-[16px] text-[#6D6D6D] cursor-pointer"
                    >
                      <ChatsCircle weight="duotone" className="mr-2" /> 5
                    </span>
                    <span className="flex cursor-pointer">
                      <BookmarkSimple />
                    </span>
                  </IconContext.Provider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Detail;
