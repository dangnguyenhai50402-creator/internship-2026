async function getUserWithPosts(userId) {
  try {
    const userUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const postsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

    const [userRes, postsRes] = await Promise.all([
      fetch(userUrl),
      fetch(postsUrl),
    ]);

    if (!userRes.ok) {
      throw new Error("Failed to fetch users");
    }
    if (!postsRes.ok) {
      throw new Error("Failed to fetch posts");
    }

    const [user, posts] = await Promise.all([userRes.json(), postsRes.json()]);

    return { user, posts };
  } catch (error) {
    console.error(error);
    return { user: null, posts: [] };
  }
}

getUserWithPosts(1).then((result) => {
  console.log("user:", result.user.name);
  console.log("posts:", result.posts.length);
});
