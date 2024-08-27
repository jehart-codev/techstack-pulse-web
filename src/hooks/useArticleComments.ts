import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAtom } from "jotai";

// import axios from "axios";

import { IArticleComment, articleCommentsAtom } from "../atoms";
// import { IArticleComment } from "../components/articles/ArticleComments/ArticleComment";

export const useArticleComments = (articleId: string) => {
  const [fetching, setFetching] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const [articleComments, setArticleComments] = useAtom(articleCommentsAtom);

  const abortController = new AbortController(); // Will be used later if we actually use API requests later.

  const fetchArticleComments = async (): Promise<{ data: IArticleComment[] }> => {
    try {
      setFetching(true);

      // TODO: Add proper url here
      // const response = await axios.get("http://localhost:3000/api", { signal: abortController.signal });
      const filteredArticleComments = articleComments.find((ac) => ac.articleId === articleId);

      /**
       * ! Fake API Request
       * We are mimicking here api request, will be removed in the future once API is available.
       */
      const response = await new Promise((resolve) => setTimeout(resolve, 2000, { data: filteredArticleComments ? filteredArticleComments.comments : [] }));

      // TODO: Uncomment to test error.
      // throw new Error("Error fetching article comments.");

      // console.log("articleComments: ", articleComments);

      return response as { data: IArticleComment[] };
    } catch (error) {
      setError(error as Error);

      throw error;
    } finally {
      setFetching(false);
    }
  };

  const addArticleComment = async (author: string, body: string) => {
    try {
      setProcessing(true);

      const id = uuidv4();

      setArticleComments((state) => {
        const idx = state.findIndex((s) => s.articleId === articleId);

        if (idx >= 0) {
          state[idx].comments.push({ id, author, body });
        }
      });

      // Fake network request delay.
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // TODO: Fake error thrown
    } catch (error) {
      setError(error as Error);

      throw error;
    } finally {
      setProcessing(false);
    }
  };

  const replyToArticleComment = async (commentId: string, author: string, body: string) => {
    const id = uuidv4();

    setArticleComments((state) => {
      const i = state.findIndex((s) => s.articleId === articleId);

      if (i >= 0) {
        const j = state[i].comments.findIndex((c) => c.id === commentId);

        if (j >= 0) {
          if (!state[i].comments[j].replies) state[i].comments[j]["replies"] = [];

          state[i].comments[j].replies.push({ id, author, body });
        }
      }
    });
  };

  useEffect(() => {
    return () => abortController.abort();
  }, []);

  return { fetching, processing, error, fetchArticleComments, addArticleComment, replyToArticleComment };
};
