import { type FC, useState } from "react";
import { TextField } from "@mui/material";
import { User } from "firebase/auth";

const ArticleCommentForm: FC<{
  user: User | null;
  disabled: boolean;
  processing: boolean;
  hideArticleCommentReplyForm?: Function;
  addArticleComment: (author: string, body: string) => void;
  setRefetchComments: Function;
}> = ({ user, disabled, processing, hideArticleCommentReplyForm, addArticleComment, setRefetchComments }) => {
  const [body, setBody] = useState("");

  return (
    <div className="w-full shadow-[0_4px_12px_0px_rgba(0,0,0,0.1)] rounded-md p-3 mt-7">
      <div className="w-full flex items-center">
        <img
          className="w-[40px] h-[40px] rounded-full"
          src="https://s3-alpha-sig.figma.com/img/11db/cb98/2f9ba115c7d5cc790cc48a457815fb67?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bmyQ8PD~U7XIpJu7gryBKa8ILmsPaBoSoA39AyIGYCYrkXbPCsMe9w6exnVzITWgDx9fEMc9thTFYh~ydCNgbSxXnrCl~mkKrKA4~VZyBNXygKDml7~wQF0bXI88vLTwps854CfFk47N5lLwZXB2jmLaMtxt6v5Gn9IMjEkz2l--VUn2qdQ6~woetX87qnA4xCK9xZhIZsPymr4oOScWq-yXhRdBUR3~mRghY7VikRQxHc7lR89mD~oMG-dd9jNGmTZ~8rihFeAhcNgATsj8CcGPia95mUHOCfo1r6YH5bCReRXKc4inh53dQ00xa~s8HESwKlsYr8RcAMuh0fVZ9Q__"
        />
        <p className="ml-2 font-semibold text-[16px] text-neutral-900">Erika Albright</p>
      </div>

      <TextField
        disabled={disabled || processing}
        autoFocus={false}
        multiline={true}
        className="border-none outline-none focus:outline-none w-full"
        placeholder="What are your thoughts"
        sx={{
          "& fieldset": { border: "none" },
        }}
        rows={3}
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <div className="flex justify-end py-2">
        <button
          disabled={disabled || processing}
          className={`w-20 rounded-lg font-normal text-[14px] align-middle ${disabled || processing ? "text-zinc-500" : "text-[#FF2E3D]"}`}
          onClick={() => {
            setBody("");

            if (typeof hideArticleCommentReplyForm === "function") {
              hideArticleCommentReplyForm();
            }
          }}
        >
          Cancel
        </button>

        <button
          disabled={disabled || processing}
          className={`ml-2 ${processing ? "w-30" : "w-20"} rounded-[48px] ${
            disabled || processing ? "bg-zinc-500" : "bg-[#FF2E3D]"
          } font-normal text-[14px] text-[#FFFFFF] py-2 px-3`}
          onClick={async () => {
            await addArticleComment(user?.displayName as string, body);
            setRefetchComments(true);
          }}
        >
          {processing ? "Responding..." : "Respond"}
        </button>
      </div>
    </div>
  );
};

export default ArticleCommentForm;
