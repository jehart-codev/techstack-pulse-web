import { ChangeEvent, createContext, ReactNode, SetStateAction, useContext, useState } from "react";

const EditorContext = createContext({
  articleData: {
    title: "",
    subtitle: "",
  },
  articleBody: "",
  handleChangeArticleData: (e: ChangeEvent<HTMLInputElement>) => {
    e;
  },
  handleChangeArticleBody: (e: SetStateAction<string>) => {
    e;
  },
  handleSubmit: () => {},
});

export const useEditor = () => useContext(EditorContext);

const EditorController = ({ children }: { children: ReactNode }) => {
  const [articleData, setArticleData] = useState({
    title: "",
    subtitle: "",
  });
  const [articleBody, setArticleBody] = useState("");

  const handleChangeArticleData = (e: ChangeEvent<HTMLInputElement>) => {
    setArticleData({
      ...articleData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeArticleBody = (e: SetStateAction<string>) => {
    setArticleBody(e);
  };

  const handleSubmit = () => {
    const params = {
      title: articleData.title,
      body: articleBody,
    };

    console.log("[handleSubmit]", params);

    // const response = await axios.post('https://localhost:3000/articles/create', params)
  };

  return (
    <EditorContext.Provider
      value={{
        articleData,
        articleBody,
        handleChangeArticleData,
        handleChangeArticleBody,
        handleSubmit,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export default EditorController;
