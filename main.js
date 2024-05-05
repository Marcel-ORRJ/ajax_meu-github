document.addEventListener("DOMContentLoaded", function () {
    const profileAvatar = document.getElementById("profile-avatar");
    const profileName = document.getElementById("profile-name");
    const profileUserName = document.getElementById("profile-username");
    const profileRepositories = document.getElementById("profile-repositories");
    const profileFollowers = document.getElementById("profile-followers");
    const profileFollowing = document.getElementById("profile-following");
    const profileLink = document.getElementById("profile-link");

    const endpoint = 'https://api.github.com/users/marcel-orrj';

    fetch(endpoint).then(function (response) {
        return response.json();
    })
        .then(function (json) {
            profileAvatar.src = json.avatar_url;
            profileName.innerText = json.name;
            profileUserName.innerText = json.login;
            profileRepositories.innerText = json.public_repos;
            profileFollowers.innerText = json.followers;
            profileFollowing.innerText = json.following;
            profileLink.href = json.html_url;
        })
})