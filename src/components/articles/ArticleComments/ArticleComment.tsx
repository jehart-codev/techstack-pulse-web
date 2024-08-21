import { type FC, useState } from "react";
import { ChatsCircle, HandsClapping, IconContext } from "@phosphor-icons/react";

export interface IArticleComment {
  author: string;
  body: string;
  replies?: {
    author: string;
    body: string;
  }[];
}

const ArticleComment: FC<IArticleComment> = ({ author, body, replies }) => {
  const [isSeeMore, setSeeMore] = useState(false);

  return (
    <div className="mt-6">
      {/** Comment header */}
      <div className="flex items-center gap-2">
        <img
          className="w-[40px] h-[40px] rounded-full"
          src="https://s3-alpha-sig.figma.com/img/11db/cb98/2f9ba115c7d5cc790cc48a457815fb67?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bmyQ8PD~U7XIpJu7gryBKa8ILmsPaBoSoA39AyIGYCYrkXbPCsMe9w6exnVzITWgDx9fEMc9thTFYh~ydCNgbSxXnrCl~mkKrKA4~VZyBNXygKDml7~wQF0bXI88vLTwps854CfFk47N5lLwZXB2jmLaMtxt6v5Gn9IMjEkz2l--VUn2qdQ6~woetX87qnA4xCK9xZhIZsPymr4oOScWq-yXhRdBUR3~mRghY7VikRQxHc7lR89mD~oMG-dd9jNGmTZ~8rihFeAhcNgATsj8CcGPia95mUHOCfo1r6YH5bCReRXKc4inh53dQ00xa~s8HESwKlsYr8RcAMuh0fVZ9Q__"
        />
        <div>
          <div className="flex leading-[20px]">
            <p className="font-semibold text-[16px] text-[#3D3D3D]">{author}</p>
          </div>
          <div className="font-normal flex text-[14px] text-[#6D6D6D]">
            <label>about a minute ago (edited)</label>
          </div>
        </div>
      </div>

      {/** Comment body */}
      <div className="mt-4">
        <p className={"font-normal text-sm overflow-hidden overflow-ellipsis " + (!isSeeMore ? "line-clamp-5" : "")}>{body}</p>
        {body && body.length > 252 && (
          <button className="font-normal text-sm text-[#FF2E3D]" onClick={() => setSeeMore((state) => !state)}>
            {isSeeMore ? "Show less" : "See more"}
          </button>
        )}
      </div>

      {/** Comments action */}
      <div className="flex flex-rows justify-between items-center mt-2">
        <div className="flex items-center">
          <IconContext.Provider value={{ size: "24px", color: "#F42534" }}>
            <span className="flex mr-3 font-normal text-base text-[#6D6D6D] cursor-pointer">
              <HandsClapping className="mr-2" /> 40
            </span>
            <span className="flex mr-3 font-normal text-base text-[#6D6D6D] cursor-pointer">
              <ChatsCircle weight="duotone" className="mr-2" /> 5
            </span>
          </IconContext.Provider>
        </div>
        <div>
          <button className="text-sm font-normal text-[#1F1F1F]">Reply</button>
        </div>
      </div>

      {/** Comment reply */}
      {replies?.length ? (
        <div className="border-[#FFC3C7] border-l-4 px-5">
          {replies.map((reply, index) => (
            <ArticleComment key={index} {...reply} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ArticleComment;
