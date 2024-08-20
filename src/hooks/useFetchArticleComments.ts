import { useEffect, useState } from "react";

// import axios from "axios";

import { IArticleComment } from "../components/articles/ArticleComments/ArticleComment";

export const useFetchArticleComments = () => {
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState<Error | null>(null);

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
      const response = await new Promise((resolve) =>
        setTimeout(resolve, 2500, {
          data: [
            { author: "John Doe", body: "This is a post comment. This is a comment. A trial comment.", replies: [] },
            {
              author: "James Bond",
              body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              replies: [
                {
                  author: "Alan Wake",
                  body: "Peter Piper picked a peck of pickled peppers. A peck of pickled peppers Peter Piper picked. If Peter Piper picked a peck of pickled peppers, Where’s the peck of pickled peppers Peter Piper picked?",
                  replies: [],
                },
                {
                  author: "Jason Bourne",
                  body: "Susie works in a shoeshine shop. Where she shines she sits, and where she sits she shines.",
                },
              ],
            },
            { author: "Hairy Petter", body: "Two Questions. First, who is the real main character in the lord of the rings? and second, why Sam?" },
            {
              author: "Albert Boomer",
              body: "The purpose of lorem ipsum is to create a natural looking block of text that doesn't distract from the layout.",
            },
          ],
        }),
      );

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
