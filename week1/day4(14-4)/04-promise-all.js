async function getMultipleUsers(ids){
    try{

        const promises = ids.map(id => 
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(res => {
                    if(!res.ok){
                        throw new Error("Failed to fetch user " + id);
                    }
                    return res.json();
                })
        )

        const users = await Promise.allSettled(promises);

        return users
        .filter(r => r.status === "fulfilled")
        .map(r => r.value);
    }
    catch(error){
        console.log(error.message);
        return [1,2,3];
    }
}

getMultipleUsers([1, 2, 999]).then(users => 
    users.forEach(u => console.log(u.name))
);