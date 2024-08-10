import Header from "../components/Header";
import ArticleEditor from "../components/ArticleEditor";

const Editor = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto">
        <ArticleEditor />
      </main>
    </div>
  );
};

export default Editor;
