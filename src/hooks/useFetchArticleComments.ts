import { useEffect, useState } from "react";
import { useAtomValue } from "jotai";

// import axios from "axios";

import { IArticleComment, articleCommentsAtom } from "../atoms";
// import { IArticleComment } from "../components/articles/ArticleComments/ArticleComment";

export const useFetchArticleComments = (articleId: string) => {
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Get test comments from Jotai.
  const articleComments = useAtomValue(articleCommentsAtom);
  const filteredArticleComments = articleComments.comments.find((ac) => ac.id === articleId);

  const abortController = new AbortController();
  const fetchArticleComments = async (): Promise<{ data: IArticleComment[] }> => {
    try {
      setFetching(true);

      // TODO: Add proper url here
      // const response = await axios.get("http://localhost:3000/api", { signal: abortController.signal });

      /**
       * ! Fake API Request
       * We are mimicking here api request, will be removed in the future once API is available.
       */
      const response = await new Promise((resolve) => setTimeout(resolve, 2000, { data: filteredArticleComments ? filteredArticleComments.comments : [] }));

      // TODO: Uncomment to test error.
      // throw new Error("Error fetching article comments.");

      return response as { data: IArticleComment[] };
    } catch (error) {
      setError(error as Error);

      throw error;
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    return () => abortController.abort();
  }, []);

  return { fetching, error, fetchArticleComments };
};
