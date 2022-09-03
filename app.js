var searchInput = document.querySelector('#search-input')
var time = document.querySelector('.profile_time')
var searchForm = document.querySelector('form')

document.body.addEventListener('keydown', (e) => {
    if (e.code === 'Slash') {
        e.preventDefault();
        searchInput.focus();
    }
})

const updateClock = () => {

    const now = new Date();
    let hour = now.getHours().toString();
    const minutes = now.getMinutes().toString();
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour.toString() : '12';

    time.innerHTML = `--- ${hour.padStart(2, '0')} : ${minutes.padStart(2, '0')} ${ampm} ---`

    setTimeout(updateClock, 1000)
}

const onSubmit = (e) => {
    e.preventDefault();

    if (searchInput.value) {
        window.location.href = `https://www.google.com/search?q=${searchInput.value}`
        searchInput.value = ''
    }
}

searchForm.addEventListener('submit', onSubmit)

updateClock();
searchInput.focus() && searchInput.select();
