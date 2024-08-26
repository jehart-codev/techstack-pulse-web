import { atomWithImmer } from "jotai-immer";

export interface IArticleComment {
  id: string;
  author: string;
  body: string;
  replies?: IArticleComment[];
}

export const articleCommentsAtom = atomWithImmer<{
  processing: boolean;
  fetching: boolean;
  comments: { id: string; comments: IArticleComment[] }[];
}>({
  processing: false,
  fetching: false,
  comments: [
    {
      id: "62359978-e10d-4217-a1c7-758265b6366a",
      comments: [
        { id: "5130ad1d-caea-4b0d-979b-57b0a59ccc39", author: "John Doe", body: "This is a post comment. This is a comment. A trial comment.", replies: [] },
        {
          id: "2fb76a0f-f5e2-418f-b48a-851868a5b6e1",
          author: "James Bond",
          body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          replies: [
            {
              id: "69d9857e-fc1f-44f8-b99f-430212d9d298",
              author: "Alan Wake",
              body: "Peter Piper picked a peck of pickled peppers. A peck of pickled peppers Peter Piper picked. If Peter Piper picked a peck of pickled peppers, Where’s the peck of pickled peppers Peter Piper picked?",
              replies: [],
            },
            {
              id: "53cf8a2d-7f4b-4173-bcf3-10dead7d36d0",
              author: "Jason Bourne",
              body: "Susie works in a shoeshine shop. Where she shines she sits, and where she sits she shines.",
            },
          ],
        },
        {
          id: "2aa4ecb7-f087-478c-b818-07f50acb4659",
          author: "Hairy Petter",
          body: "Two Questions. First, who is the real main character in the lord of the rings? and second, why Sam?",
        },
        {
          id: "7c69e959-01ec-4c43-b671-af0bac0e9cb2",
          author: "Albert Boomer",
          body: "The purpose of lorem ipsum is to create a natural looking block of text that doesn't distract from the layout.",
        },
      ],
    },
  ],
});
