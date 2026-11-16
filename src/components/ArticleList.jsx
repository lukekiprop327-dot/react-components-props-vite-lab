import Article from "./Article";

// Renders one Article per post. `key` must be unique, so we use post.id.
function ArticleList({ posts = [] }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;