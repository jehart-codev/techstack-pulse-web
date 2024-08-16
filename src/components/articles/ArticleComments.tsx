import { useImperativeHandle, forwardRef, useState, useEffect } from "react";
import { CaretDown, ChatsCircle, HandsClapping, IconContext, XCircle } from "@phosphor-icons/react";
import Drawer from "@mui/material/Drawer";
import { TextField } from "@mui/material";

import { useFetchPostComments } from "../../hooks";
import ArticleComment, { IArticleComment } from "./ArticleComment";

// TODO: fixup ref type of any
const PostComments = forwardRef<any, {}>((_, ref) => {
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState<IArticleComment[]>([]);
  const [processing, setProcessing] = useState(false);
  const [isSeeMore, setSeeMore] = useState(false);

  const fetchPostComments = useFetchPostComments();

  useImperativeHandle(ref, () => ({
    showComments: () => setOpen(true),
  }));

  useEffect(() => {
    if (open) {
      async function fetchComments() {
        try {
          setProcessing(true);

          const comments = await fetchPostComments();

          // @ts-ignore
          setComments(comments.data);
        } catch (error) {
          // TODO: Add error handling
        } finally {
          setProcessing(false);
        }
      }

      fetchComments();

      console.log("Fetching article comments!");
    }
  }, [open]);

  return (
    <Drawer open={open} onClose={() => setOpen(false)} anchor="right" PaperProps={{ width: "90%" }} className="w-100">
      <div className="w-[424px] p-5 mt-4">
        <div className="flex justify-between items-center">
          <span className="text-[#3D3D3D] font-semibold text-[20px] leading-7">Responses (54)</span>
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
            <button className="w-20 rounded-lg font-normal text-[14px] align-middle text-[#FF2E3D]">Cancel</button>
            <button className="ml-2 w-20 rounded-[48px] bg-[#FF2E3D] font-normal text-[14px] text-[#FFFFFF] py-2 px-3">Respond</button>
          </div>
        </div>

        {/* Comments section */}
        <div className="flex mt-7 align-middle items-center">
          <span className="font-semibold text-base text-[#1F1F1F]">Most Relevant </span>
          <CaretDown size={20} className="text-[#737373] ml-2 cursor-pointer" />
        </div>

        {comments.map((comment, index) => (
          <ArticleComment key={index} {...comment} />
        ))}
      </div>
    </Drawer>
  );
});

export default PostComments;
