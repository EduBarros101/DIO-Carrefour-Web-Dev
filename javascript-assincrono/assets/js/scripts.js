const BASE_URL = 'https://thatcopy.pw/catapi/rest/'
const catBtn = document.querySelector('#change-cat')

const getCats = async () => {
    const data = await fetch(BASE_URL)
        .then((res) => res.json())
        .catch((error) => console.log(error))

    return data.webpurl
}
const loadImg = async () => {
    const catImg = document.querySelector('#cat')
    catImg.src = await getCats()
}

catBtn.addEventListener('click', loadImg)

loadImg()
