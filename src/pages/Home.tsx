import { useState } from "react";
import { IconContext, BookmarkSimple, HandsClapping, ChatsCircle } from "@phosphor-icons/react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const topArticles = [
  {
    title: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description: "A Journey Through the Design of an Equity, Diversity and Inclusion Power BI Dashboard.",
    date: "Mar 3",
    claps: "40",
    comments: "4",
    image:
      "https://s3-alpha-sig.figma.com/img/fbbd/1004/9cf87f621bbb637f67dc3f86d8eb7c0c?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QX~G5sHAoSW~Q5IjHEiQT-TYwGnBTB30heA7EI0pigvn~w6n8O2HQHBjuOf8lUpJKxuYn8cwJXZ7M3o5ORkrXZPNeMxc2VitcMPvRv7QijgOSHU5CG39WcN6epiT6wMhaETcroqFO~HJqOlYoAwhUh2RaLF6-JuOaJjQbu7Hz~UHT9srlkE6rNvsIcNFG~NQ1v2nDJdHlKgvt3qFd7sQ8PHg-xzhLbNWFfOc6Pm4hC9YYXbmiHRBuigt6p7qKnfWVyYEJFfxG3WzJ~Tfa4WuBswSxXRKluy8LKAA4wvkaoQ4Pjld8I27v5DGz4kXn~RNOyleN0wnKF2Y7E-V7nTEng__",
  },
  {
    id: "bcabe0d5-9516-4d15-9b13-7d46da332cdf",
    title: "Key takeaways from Airbnb’s winter redesign",
    description: "Returns of good design, a new UI paradigm and the smart use of AI.",
    date: "Mar 4",
    claps: "1.3k",
    comments: "0",
    image:
      "https://s3-alpha-sig.figma.com/img/fbbd/1004/9cf87f621bbb637f67dc3f86d8eb7c0c?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QX~G5sHAoSW~Q5IjHEiQT-TYwGnBTB30heA7EI0pigvn~w6n8O2HQHBjuOf8lUpJKxuYn8cwJXZ7M3o5ORkrXZPNeMxc2VitcMPvRv7QijgOSHU5CG39WcN6epiT6wMhaETcroqFO~HJqOlYoAwhUh2RaLF6-JuOaJjQbu7Hz~UHT9srlkE6rNvsIcNFG~NQ1v2nDJdHlKgvt3qFd7sQ8PHg-xzhLbNWFfOc6Pm4hC9YYXbmiHRBuigt6p7qKnfWVyYEJFfxG3WzJ~Tfa4WuBswSxXRKluy8LKAA4wvkaoQ4Pjld8I27v5DGz4kXn~RNOyleN0wnKF2Y7E-V7nTEng__",
  },
];

const recentArticles = [
  {
    id: "596cef1f-427f-4fd4-86a6-1d9d9f57b730",
    title: "10 Facts about color in Design",
    description: "Thing to remember when creating a color scheme for your product.",
    date: "Mar 28",
    claps: "920",
    comments: "0",
    image:
      "https://s3-alpha-sig.figma.com/img/fbbd/1004/9cf87f621bbb637f67dc3f86d8eb7c0c?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QX~G5sHAoSW~Q5IjHEiQT-TYwGnBTB30heA7EI0pigvn~w6n8O2HQHBjuOf8lUpJKxuYn8cwJXZ7M3o5ORkrXZPNeMxc2VitcMPvRv7QijgOSHU5CG39WcN6epiT6wMhaETcroqFO~HJqOlYoAwhUh2RaLF6-JuOaJjQbu7Hz~UHT9srlkE6rNvsIcNFG~NQ1v2nDJdHlKgvt3qFd7sQ8PHg-xzhLbNWFfOc6Pm4hC9YYXbmiHRBuigt6p7qKnfWVyYEJFfxG3WzJ~Tfa4WuBswSxXRKluy8LKAA4wvkaoQ4Pjld8I27v5DGz4kXn~RNOyleN0wnKF2Y7E-V7nTEng__",
  },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState("top-posts");
  const navigate = useNavigate();
  const articleDetail = (id: string) => navigate(`/detail?id=${id}`);

  const renderArticles = () => {
    const chosenArticles = activeTab === "top-posts" ? topArticles : recentArticles;

    return (
      <>
        {chosenArticles.map((article) => (
          <div key={article.title} className="py-10">
            <div className="flex gap-8 mb-4">
              {/* article snapshot */}
              <div className="grow flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  {/* avatar */}
                  <div className="flex items-center gap-2">
                    <img
                      className="w-6 rounded-full"
                      src="https://s3-alpha-sig.figma.com/img/11db/cb98/2f9ba115c7d5cc790cc48a457815fb67?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MmUSojFHqGzG2o7CET3l5uqgbE6yIBn4pyAf-S21ox4h5vDYwtRFN~byI0DAv76vaKB63QTkj3yfhmkt7pKc-APkuHTZE6ZtSPSK1fflHwo9MivyIh65AGafYTMW8yZMBxkH7URSwlDpuP2HmySuKMn8wYad2sOdZmnHm7t0Su9QCwtJOrZWZuIf-prLTQxjFeDCl65QrqAlESlHTfZnXeTRVHAeDQmxY1FfOxxeH1rqz7oWteElE1qTicxkJ-781qFhfYQHGu-gdMZzCRil~SVYZryGFPp8TBuPjfqWAH-Hd6wVEfbjU67tf5ieJfvRj8Z2lSEngjBGuHnE8Ne9PQ__"
                    />
                    <p className="text-sm">Erika Albright</p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold cursor-pointer line-clamp-3" onClick={() => articleDetail(article.id as string)}>
                  {article.title}
                </h2>
                <p>{article.description}</p>
              </div>
              {/* article banner */}
              <div className="w-[310px] shrink-0">
                <img
                  alt="article image"
                  className="w-[100%] block rounded-lg"
                  src="https://s3-alpha-sig.figma.com/img/fbbd/1004/9cf87f621bbb637f67dc3f86d8eb7c0c?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QX~G5sHAoSW~Q5IjHEiQT-TYwGnBTB30heA7EI0pigvn~w6n8O2HQHBjuOf8lUpJKxuYn8cwJXZ7M3o5ORkrXZPNeMxc2VitcMPvRv7QijgOSHU5CG39WcN6epiT6wMhaETcroqFO~HJqOlYoAwhUh2RaLF6-JuOaJjQbu7Hz~UHT9srlkE6rNvsIcNFG~NQ1v2nDJdHlKgvt3qFd7sQ8PHg-xzhLbNWFfOc6Pm4hC9YYXbmiHRBuigt6p7qKnfWVyYEJFfxG3WzJ~Tfa4WuBswSxXRKluy8LKAA4wvkaoQ4Pjld8I27v5DGz4kXn~RNOyleN0wnKF2Y7E-V7nTEng__"
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <p>{article.date}</p>
                <div className="flex items-center gap-2">
                  <HandsClapping />
                  <span>{article.claps}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChatsCircle />
                  <span>{article.comments}</span>
                </div>
              </div>
              <a href="#">
                <BookmarkSimple />
              </a>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto">
        <div className="flex gap-16 px-4">
          <div className="grow py-14">
            {/* tabs */}
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
              <ul className="flex flex-wrap gap-4 -mb-px">
                <li className="me-2">
                  <a
                    href="#"
                    onClick={() => setActiveTab("top-posts")}
                    className={`${
                      activeTab === "top-posts" ? "font-bold border-[#3d3d3d]" : "border-transparent opacity-75 text-[#6d6d6d]"
                    } inline-block py-4 border-b-2  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}
                  >
                    Top Posts
                  </a>
                </li>
                <li className="me-2">
                  <a
                    href="#"
                    onClick={() => setActiveTab("recents")}
                    className={`${
                      activeTab === "recents" ? "font-bold border-[#3d3d3d]" : "border-transparent opacity-75 text-[#6d6d6d]"
                    } inline-block py-4 border-b-2  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}
                    aria-current="page"
                  >
                    Recents
                  </a>
                </li>
              </ul>
            </div>

            {/* article */}
            <IconContext.Provider value={{ size: "20px", color: "#F42534" }}>{renderArticles()}</IconContext.Provider>
          </div>
          <div className="w-[424px] shrink-0 py-10 px-3 lg:block hidden">
            <div className="p-3">
              <p className="font-semibold mb-3">
                Recommended <span className="text-[#FF2E3D]">Topics</span>
              </p>
              <ul className="flex items-center flex-wrap gap-3">
                <li className="text-[#1f1f1f] p-4 bg-[#f6f6f6] rounded-[80px] leading-none cursor-pointer">Events</li>
                <li className="text-[#1f1f1f] p-4 bg-[#f6f6f6] rounded-[80px] leading-none cursor-pointer">Games</li>
                <li className="text-[#1f1f1f] p-4 bg-[#f6f6f6] rounded-[80px] leading-none cursor-pointer">Sports</li>
                <li className="text-[#1f1f1f] p-4 bg-[#f6f6f6] rounded-[80px] leading-none cursor-pointer">Technology</li>
                <li className="text-[#1f1f1f] p-4 bg-[#f6f6f6] rounded-[80px] leading-none cursor-pointer">Lifestyle</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
