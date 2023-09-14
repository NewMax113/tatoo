import imgs from './Masters_img/master_img'

let master = {
    master: [
        { id: 1, name: 'Игорь', img: imgs[0] },
        { id: 2, name: 'Пила', img: imgs[1] },
        { id: 3, name: 'Анджедика', img: imgs[2] },
        { id: 4, name: 'Мика', img: imgs[3] },
    ]
}

export let masters = (state = master) => {
    return state
}
