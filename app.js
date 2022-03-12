console.log('Before');
getUser(1,(user) =>{
    getRepositories(user.Username,(repos) =>{
        console.log('Repos', repos);
    })
});
console.log('After');


function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a User from Database');
        callback({ id: id, Username: 'Elsen01'});
    }, 2000);
}

function getRepositories(Username, callback) {
    setTimeout(() => {
        console.log('GitHub API...');
        callback(['Repo1', 'Repo2', 'Repo3']);
    },2000);
}