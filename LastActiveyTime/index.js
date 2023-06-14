const posts = [];
let lastActivityTime = null;

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve(post);
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActivityTime = new Date().toISOString();
            resolve(lastActivityTime);
        }, 1000);
    });
}

function deleteLastPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length === 0) {
                reject('ERROR: ARRAY IS EMPTY');
            } else {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            }
        }, 1000);
    });
}

createPost('Post 1')
    .then(() => updateLastUserActivityTime())
    .then((activityTime) => {
        console.log('Posts:', posts);
        console.log('Last Activity Time:', activityTime);
        return createPost('Post 2');
    })
    .then(() => updateLastUserActivityTime())
    .then((activityTime) => {
        console.log('Posts:', posts);
        console.log('Last Activity Time:', activityTime);
        return deleteLastPost();
    })
    .then((deletedPost) => {
        console.log('Deleted Post:', deletedPost);
        console.log('Posts:', posts);
    })
    .catch((error) => {
        console.log(error);
    });
