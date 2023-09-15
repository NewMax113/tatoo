import img_store from "../component/store/Img_store"

let card = {
    style_tatoo_card: [
        { id: 1, img: img_store[0], name: 'test', cost: '2000 руб.', description: 'Предварительные выводы неутешительны: разбавленное изрядной долей эмпатии, рациональное мышление влечет за собой процесс внедрения и модернизации вывода текущих активов. Таким образом, экономическая повестка сегодняшнего дня в значительной степени обусловливает важность переосмысления внешнеэкономических политик. Как принято считать, независимые государства лишь добавляют фракционных разногласий и преданы социально-демократической анафеме' },
        { id: 2, img: img_store[1], name: 'test2', cost: '3000 руб.', description: '' },
        { id: 3, img: img_store[2], name: 'test3', cost: '2500 руб.', description: '' },
        { id: 4, img: img_store[3], name: 'test4', cost: '7300 руб.', description: '' },
        // { id: 1, img: img_store[0], name: 'test', },
        // { id: 2, img: img_store[1], name: 'test2', },
        // { id: 3, img: img_store[2], name: 'test3', },
        // { id: 4, img: img_store[3], name: 'test4', },
        // { id: 1, img: img_store[0], name: 'test', },
        // { id: 2, img: img_store[1], name: 'test2', },
        // { id: 3, img: img_store[2], name: 'test3', },
        // { id: 4, img: img_store[3], name: 'test4', },
    ],
    card_noww: ['']
}

export let post = (state = card, action) => {
    if (action.type === 'ids') {
        let card_now = card.style_tatoo_card.filter(card => card.id == action.id)
        return {
            ...state,
            card_noww: card_now
        }
    }
    return state
}

export let ids = (id) => ({ type: 'ids', id: id })