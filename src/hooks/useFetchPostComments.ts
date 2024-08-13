import { useEffect } from "react";

// import axios from "axios";

export const useFetchPostComments = () => {
  const abortController = new AbortController();
  const fetchPostComments = async () => {
    // TODO: Add proper url here
    // const response = await axios.get("http://localhost:3000/api", { signal: abortController.signal });

    /**
     * We are mimicking here api request, will be removed in the future once API is available.
     */
    const response = await new Promise((resolve) =>
      setTimeout(resolve, 2500, {
        data: [
          { author: "John Doe", comment: "This is a post comment. This is a comment. A trial comment." },
          { author: "James Bond", comment: "Name's bond, james bond." },
          { author: "Hairy Petter", comment: "Two Questions. First, who is the real main character in the lord of the rings? and second, why Sam?" },
          {
            author: "Albert Boomer",
            comment: "The purpose of lorem ipsum is to create a natural looking block of text that doesn't distract from the layout.",
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
