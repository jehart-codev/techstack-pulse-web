import Header from "../components/Header";
import ArticleEditor from "../components/ArticleEditor";

import EditorController from "../contexts/EditorContext";

const Editor = () => {
  return (
    <div>
      <EditorController>
        <Header />
        <main className="container mx-auto">
          <ArticleEditor />
        </main>
      </EditorController>
    </div>
  );
};

export default Editor;
