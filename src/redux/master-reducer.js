import imgs from './Masters_img/master_img'

let master = {
    master: [
        { id: 1, name: 'Анджедика', img: imgs[0], works: imgs},
        { id: 2, name: 'Мика', img: imgs[1] },
        { id: 3, name: 'Игорь', img: imgs[2] },
        { id: 4, name: 'Владос', img: imgs[3] },
    ],
    master_now: ['']
}

export let masters = (state = master, action) => {
    if (action.type === 'ids') {
        console.log(action.id)
        let master_now = master.master.filter(card => card.id == action.id)
        return {
            ...state,
            master_now: master_now
        }
    }
    return state
}
export let ids = (id) => ({ type: 'ids', id: id })
