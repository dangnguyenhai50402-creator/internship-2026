async function getNonComUsers() {
  try {
    const allUsersRes = await fetch(
      `https://jsonplaceholder.typicode.com/users`
    );

    if (!allUsersRes.ok) {
      throw new Error("Failed to fetch all users");
    }

    const allUsers = await allUsersRes.json();

    return allUsers.reduce((acc, user) => {
      if (!user.website.includes(".com")) {
        acc.push({ name: user.name, email: user.email, website: user.website });
      }
      return acc;
    }, []);
  } catch (error) {
    console.log(error);
    return [];
  }
}

getNonComUsers().then((users) => {
  console.log(`Tim thay ${users.length} users:`);
  users.forEach((user) => console.log(`${user.name} & ${user.website}`));
});
