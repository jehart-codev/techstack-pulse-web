import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor, Bold, Essentials, Heading, Indent, IndentBlock, Italic, Link, List, MediaEmbed, Paragraph, Table, Undo } from "ckeditor5";

import { useEditor } from "../contexts/EditorContext";

import "ckeditor5/ckeditor5.css";

const ArticleEditor = () => {
  const { handleChangeArticleBody } = useEditor();

  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        toolbar: [
          "undo",
          "redo",
          "|",
          "heading",
          "|",
          "bold",
          "italic",
          "|",
          "link",
          "insertTable",
          "mediaEmbed",
          "|",
          "bulletedList",
          "numberedList",
          "indent",
          "outdent",
        ],
        plugins: [Bold, Essentials, Heading, Indent, IndentBlock, Italic, Link, List, MediaEmbed, Paragraph, Table, Undo],
      }}
      onChange={(__, editor) => handleChangeArticleBody(editor.getData())}
    />
  );
};

export default ArticleEditor;
