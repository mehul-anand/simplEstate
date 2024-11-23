import './list.scss'
import Card from"../card/Card"

function List({ posts }) {
  return (
    <div className="list">
      {posts && posts.length > 0 ? (
        posts.map((post) => <Card key={post.id} propertyData={post} />)
      ) : (
        // <p>No posts available</p>
        <p>No posts made</p>
      )}
    </div>
  );
}

export default List;
