import { useEffect } from "react";

// import axios from "axios";

export const useFetchArticleComments = () => {
  const abortController = new AbortController();
  const fetchPostComments = async () => {
    // TODO: Add proper url here
    // const response = await axios.get("http://localhost:3000/api", { signal: abortController.signal });

    /**
     * We are mimicking here api request, will be removed in the future once API is available.
     */
    const response = await new Promise((resolve) =>
      setTimeout(resolve, 2000, {
        data: [
          { author: "John Doe", body: "This is a post comment. This is a comment. A trial comment.", replies: [] },
          {
            author: "James Bond",
            body: "Name's bond, james bond.",
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

    return response;
  };

  useEffect(() => {
    return () => abortController.abort();
  }, []);

  return fetchPostComments;
};
