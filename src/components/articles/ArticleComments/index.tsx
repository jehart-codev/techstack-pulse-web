import { useImperativeHandle, forwardRef, useState, useEffect } from "react";
import { CaretDown, XCircle } from "@phosphor-icons/react";
import { Drawer, Alert } from "@mui/material";

import { IArticleComment } from "../../../atoms";
import { useAuth } from "../../../contexts/AuthContext";
import { useArticleComments } from "../../../hooks";
import ArticleCommentForm from "./ArticleCommentForm";
import ArticleComment from "./ArticleComment";
import ArticleCommentsSkeleton from "./ArticleCommentsSkeleton";

// TODO: fixup ref type of any
const PostComments = forwardRef<any, { articleId: string }>(({ articleId }, ref) => {
  const [open, setOpen] = useState(false);
  const [refetchComments, setRefetchComments] = useState(false);
  const [comments, setComments] = useState<IArticleComment[]>([]);

  const { user } = useAuth();
  const { fetching, processing, error, fetchArticleComments, addArticleComment } = useArticleComments(articleId);

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
    if ((open && !comments.length) || refetchComments) {
      async function fetchComments() {
        try {
          const comments = await fetchArticleComments();

          setComments(comments.data);
          setRefetchComments(false);
        } catch (error) {
          console.log(error);
        }
      }

      fetchComments();
    }
  }, [open, refetchComments]);

  return (
    <Drawer open={open} onClose={() => setOpen(false)} anchor="right" PaperProps={{ width: "90%" }} className="w-100">
      <div className="w-[424px] p-5 mt-4">
        <div className="flex justify-between items-center">
          <span className="text-[#3D3D3D] font-semibold text-[20px] leading-7">Responses ({comments.length})</span>
          <XCircle size={32} className="cursor-pointer" onClick={() => setOpen(false)} />
        </div>

        {/* Text Area for posting comment */}
        <ArticleCommentForm
          user={user}
          disabled={fetching}
          processing={processing}
          addArticleComment={addArticleComment}
          setRefetchComments={setRefetchComments}
        />

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
          comments.map((comment, index) => <ArticleComment user={user} key={index} {...comment} />)
        )}
      </div>
    </Drawer>
  );
});

export default PostComments;
