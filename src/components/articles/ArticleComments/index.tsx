import { useImperativeHandle, forwardRef, useState, useEffect } from "react";
import { CaretDown, XCircle } from "@phosphor-icons/react";
import { Drawer, Alert, TextField } from "@mui/material";

import { useFetchArticleComments } from "../../../hooks";
import ArticleComment, { IArticleComment } from "./ArticleComment";
import ArticleCommentsSkeleton from "./ArticleCommentsSkeleton";

// TODO: fixup ref type of any
const PostComments = forwardRef<any, {}>((_, ref) => {
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState<IArticleComment[]>([]);

  const { fetching, error, fetchArticleComments } = useFetchArticleComments();

  useImperativeHandle(ref, () => ({
    showComments: () => setOpen(true),
  }));

  useEffect(() => {
    /**
     * ! Limitations
     * Since we are using comments state as a cache mechanism.
     * That means if underlying comments are modified, we won't see it.
     * Solution:
     * 1. Add some sort of refresh comment functionality.
     * 2. When replying or adding new comment, fetch latest comments.
     */
    if (open && !comments.length) {
      async function fetchComments() {
        try {
          const comments = await fetchArticleComments();

          setComments(comments.data);
        } catch (error) {
          console.log(error);
        }
      }

      fetchComments();
    }
  }, [open]);

  return (
    <Drawer open={open} onClose={() => setOpen(false)} anchor="right" PaperProps={{ width: "90%" }} className="w-100">
      <div className="w-[424px] p-5 mt-4">
        <div className="flex justify-between items-center">
          <span className="text-[#3D3D3D] font-semibold text-[20px] leading-7">Responses ({comments.length})</span>
          <XCircle size={32} className="cursor-pointer" onClick={() => setOpen(false)} />
        </div>

        {/* Text Area for posting comment */}
        <div className="w-full shadow-[0_4px_12px_0px_rgba(0,0,0,0.1)] rounded-md p-3 mt-7">
          <div className="w-full flex items-center">
            <img
              className="w-[40px] h-[40px] rounded-full"
              src="https://s3-alpha-sig.figma.com/img/11db/cb98/2f9ba115c7d5cc790cc48a457815fb67?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bmyQ8PD~U7XIpJu7gryBKa8ILmsPaBoSoA39AyIGYCYrkXbPCsMe9w6exnVzITWgDx9fEMc9thTFYh~ydCNgbSxXnrCl~mkKrKA4~VZyBNXygKDml7~wQF0bXI88vLTwps854CfFk47N5lLwZXB2jmLaMtxt6v5Gn9IMjEkz2l--VUn2qdQ6~woetX87qnA4xCK9xZhIZsPymr4oOScWq-yXhRdBUR3~mRghY7VikRQxHc7lR89mD~oMG-dd9jNGmTZ~8rihFeAhcNgATsj8CcGPia95mUHOCfo1r6YH5bCReRXKc4inh53dQ00xa~s8HESwKlsYr8RcAMuh0fVZ9Q__"
            />
            <p className="ml-2 font-semibold text-[16px] text-neutral-900">Erika Albright</p>
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
            <button disabled={fetching} className={`w-20 rounded-lg font-normal text-[14px] align-middle ${fetching ? "text-zinc-500" : "text-[#FF2E3D]"}`}>
              Cancel
            </button>
            <button
              disabled={fetching}
              className={`ml-2 w-20 rounded-[48px] ${fetching ? "bg-zinc-500" : "bg-[#FF2E3D]"} font-normal text-[14px] text-[#FFFFFF] py-2 px-3`}
            >
              Respond
            </button>
          </div>
        </div>

        {/* Comments section */}
        <div className="flex mt-7 align-middle items-center">
          <span className="font-semibold text-base text-[#1F1F1F]">Most Relevant </span>
          <CaretDown size={20} className="text-[#737373] ml-2 cursor-pointer" />
        </div>

        {fetching ? (
          <ArticleCommentsSkeleton />
        ) : error ? (
          <Alert severity="error" className="mt-6">
            {error.message}
          </Alert>
        ) : (
          comments.map((comment, index) => <ArticleComment key={index} {...comment} />)
        )}
      </div>
    </Drawer>
  );
});

export default PostComments;
