const HomePost = () => {
  return (
    <>
      <section className="home-post-container">
        <h1 className="title-home-post">Welcome to Blog</h1>
        <picture className="image-post-home">
          <img src="a.png" alt=" post home image " />
        </picture>

        <section className="container-home-p">
          <h2>About Blog</h2>
          <p className="text-home-page">
            Blog is a forum which can be used to talk with other people about
            any topic, any post that you create is share with the whole blog
            community so they can answer your question, the main reason of blog
            is created a question-answer community, that could share stories
            even make friends.
          </p>
          <p className="text-home-page">
            Reload the page to see your post, same goes for the comments, once
            you submit your comment, pls reload the page and you will see it.
            Also in the navigation bar you will see a sun/moon icon which allow
            switching the color theme of the page.
          </p>
        </section>

        <section className="container-home-p">
          <h2>Features</h2>
          <p className="text-home-page">
            Create Posts to start a new topic for everyone or if you prefer
            share your favorite hobby, lets share what you really likes, may
            find someone who likes it too. Also in the navigation bar you will
            see a sun/moon icon which allow switching the color theme of the
            page.
            Refresh the page in order to see new posts or new comments.
          </p>
        </section>

        <section className="container-home-p">
          <h2>Next features</h2>
          <p className="text-home-page">
          Login per session will generate a temporary user token. Then you as a user will be able to receive notifications as soon someone else comments your posts.

          </p>
        </section>
      </section>
    </>
  );
};

export default HomePost;
