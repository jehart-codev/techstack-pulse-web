import Header from "../components/Header";
import ArticleEditor from "../components/ArticleEditor";
import React, { useState } from "react";

const Editor = () => {
  const [body, setBody] = useState("");

  const handleChangeBody = (e) => {
    setBody(e);
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto">
        <ArticleEditor onHandleChangeBody={handleChangeBody} />
      </main>
    </div>
  );
};

export default Editor;
