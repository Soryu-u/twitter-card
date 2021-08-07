const button = document.querySelector('input');
const followersConut = document.getElementById("followers");
let followers = 100500;

let followersNum = followers.toLocaleString()

followersConut.innerText = followersNum

button.addEventListener('click', updateButton);

function updateButton() {
    if (button.value === 'follow') {
        followers++
        let followersNum = followers.toLocaleString()
        followersConut.innerText = followersNum
        this.classList.add("active");
        button.value = 'following';



    } else if (button.value === 'following') {
        followers--
        let followersNum = followers.toLocaleString()
        followersConut.innerText = followersNum
        this.classList.remove("active");
        button.value = 'follow';



    } else {
        console.log('err')
    }
}
