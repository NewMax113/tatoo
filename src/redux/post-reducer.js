import { useDispatch } from "react-redux"
import img_store from "../component/store/Img_store"
import { bindActionCreators } from "redux"

let card = {
    style_tatoo_card: [
        { id: 1, img: img_store[0], name: 'Первый', cost: '2000 руб.', description: 'Предварительные выводы неутешительны: разбавленное изрядной долей эмпатии, рациональное мышление влечет за собой процесс внедрения и модернизации вывода текущих активов. Таким образом, экономическая повестка сегодняшнего дня в значительной степени обусловливает важность переосмысления внешнеэкономических политик. Как принято считать, независимые государства лишь добавляют фракционных разногласий и преданы социально-демократической анафеме' },
        { id: 2, img: img_store[1], name: 'Второй', cost: '3000 руб.', description: '' },
        { id: 3, img: img_store[2], name: 'Третий', cost: '2500 руб.', description: '' },
        { id: 4, img: img_store[3], name: 'Четвертый', cost: '7300 руб.', description: '' },
        { id: 5, img: img_store[0], name: 'Первый', cost: '2000 руб.', description: 'Предварительные выводы неутешительны: разбавленное изрядной долей эмпатии, рациональное мышление влечет за собой процесс внедрения и модернизации вывода текущих активов. Таким образом, экономическая повестка сегодняшнего дня в значительной степени обусловливает важность переосмысления внешнеэкономических политик. Как принято считать, независимые государства лишь добавляют фракционных разногласий и преданы социально-демократической анафеме' },
        { id: 6, img: img_store[1], name: 'Второй', cost: '3000 руб.', description: '' },
        { id: 7, img: img_store[2], name: 'Третий', cost: '2500 руб.', description: '' },
        { id: 8, img: img_store[3], name: 'Четвертый', cost: '7300 руб.', description: '' },
        { id: 9, img: img_store[0], name: 'Первый', cost: '2000 руб.', description: 'Предварительные выводы неутешительны: разбавленное изрядной долей эмпатии, рациональное мышление влечет за собой процесс внедрения и модернизации вывода текущих активов. Таким образом, экономическая повестка сегодняшнего дня в значительной степени обусловливает важность переосмысления внешнеэкономических политик. Как принято считать, независимые государства лишь добавляют фракционных разногласий и преданы социально-демократической анафеме' },
        { id: 10, img: img_store[1], name: 'Второй', cost: '3000 руб.', description: '' },
        { id: 11, img: img_store[2], name: 'Третий', cost: '2500 руб.', description: '' },
        { id: 12, img: img_store[3], name: 'Четвертый', cost: '7300 руб.', description: '' },
        { id: 13, img: img_store[0], name: 'Первый', cost: '2000 руб.', description: 'Предварительные выводы неутешительны: разбавленное изрядной долей эмпатии, рациональное мышление влечет за собой процесс внедрения и модернизации вывода текущих активов. Таким образом, экономическая повестка сегодняшнего дня в значительной степени обусловливает важность переосмысления внешнеэкономических политик. Как принято считать, независимые государства лишь добавляют фракционных разногласий и преданы социально-демократической анафеме' },
        { id: 14, img: img_store[1], name: 'Второй', cost: '3000 руб.', description: '' },
        { id: 15, img: img_store[2], name: 'Третий', cost: '2500 руб.', description: '' },
        { id: 16, img: img_store[3], name: 'Четвертый', cost: '7300 руб.', description: '' },
        { id: 17, img: img_store[0], name: 'Первый', cost: '2000 руб.', description: 'Предварительные выводы неутешительны: разбавленное изрядной долей эмпатии, рациональное мышление влечет за собой процесс внедрения и модернизации вывода текущих активов. Таким образом, экономическая повестка сегодняшнего дня в значительной степени обусловливает важность переосмысления внешнеэкономических политик. Как принято считать, независимые государства лишь добавляют фракционных разногласий и преданы социально-демократической анафеме' },
        { id: 18, img: img_store[1], name: 'Второй', cost: '3000 руб.', description: '' },
        { id: 19, img: img_store[2], name: 'Третий', cost: '2500 руб.', description: '' },
        { id: 20, img: img_store[3], name: 'Четвертый', cost: '7300 руб.', description: '' },
        { id: 21, img: img_store[0], name: 'Первый', cost: '2000 руб.', description: 'Предварительные выводы неутешительны: разбавленное изрядной долей эмпатии, рациональное мышление влечет за собой процесс внедрения и модернизации вывода текущих активов. Таким образом, экономическая повестка сегодняшнего дня в значительной степени обусловливает важность переосмысления внешнеэкономических политик. Как принято считать, независимые государства лишь добавляют фракционных разногласий и преданы социально-демократической анафеме' },
        { id: 22, img: img_store[1], name: 'Второй', cost: '3000 руб.', description: '' },
        { id: 23, img: img_store[2], name: 'Третий', cost: '2500 руб.', description: '' },
        { id: 24, img: img_store[3], name: 'Четвертый', cost: '7300 руб.', description: '' },
    ],
    card_noww: [''],
    style_tatoo_card_filter: [],
    sort_plus: false,
    sort_minus: false,
    rendering_filter: false,
    filter_combine: false,
    arr_filter_combine: [],
    total_page: function () {
        return this.style_tatoo_card.length
    },
    page_now: 1,
    card_drawn: 10,
    only_users: function () {
        card = []
        for (let i = this.page_now * this.card_drawn - this.card_drawn; i < this.page_now * this.card_drawn; i++) {
            this.style_tatoo_card[i] !== undefined && card.push(this.style_tatoo_card[i])
        }
        return card
    },
    reset_boolean: false
}

export let post = (state = card, action) => {
    if (action.type === 'ids') {
        let card_now = card.style_tatoo_card.filter(card => card.id == action.id)
        return {
            ...state,
            card_noww: card_now
        }
    }
    if (action.type === 'sort_plus') {
        if (action.value == 'name+') {
            return {
                ...state,
                sort_plus: true,
                sort_minus: false,
                rendering_filter: true,
                style_tatoo_card_filter: state.style_tatoo_card_filter == ''
                    ? [...state.style_tatoo_card.sort((a, b) => a.name.localeCompare(b.name))]
                    : [...state.style_tatoo_card_filter].sort((a, b) => a.name.localeCompare(b.name))
            }

        }
        else {
            return {
                ...state,
                sort_minus: true,
                sort_plus: false,
                rendering_filter: true,
                style_tatoo_card_filter: state.style_tatoo_card_filter == ''
                    ? [...state.style_tatoo_card.sort((a, b) => b.name.localeCompare(a.name))]
                    : [...state.style_tatoo_card_filter.sort((a, b) => b.name.localeCompare(a.name))]
            }
        }
    }
    if (action.type === 'search') {

        if (state.sort_plus === true) {
            return {
                ...state,
                rendering_filter: true,
                style_tatoo_card_filter: [...state.style_tatoo_card_filter
                    .filter((name) => name.name
                        .toLowerCase()
                        .includes(action.text.toLowerCase()))
                    .sort((a, b) => a.name
                        .localeCompare(b.name))]
            }
        }
        else if (state.sort_minus === true) {
            return {
                ...state,
                rendering_filter: true,
                style_tatoo_card_filter: [...state.style_tatoo_card_filter
                    .filter((name) => name.name
                        .toLowerCase()
                        .includes(action.text.toLowerCase()))
                    .sort((a, b) => b.name.localeCompare(a.name))]
            }
        }
        else {
            return {
                ...state,
                rendering_filter: true,
                style_tatoo_card_filter: [...state.style_tatoo_card]
                    .filter((name) => name.name.toLowerCase().includes(action.text.toLowerCase()))
            }
        }
    }
    if (action.type === 'filter-caterogy') {
        let b = []
        let a = action.arr.map(x => [...state.style_tatoo_card].filter(y => y.name == x)).map(x => x.map(y => b.push(y)))
        if (action.arr.length > 0) {
            if (!state.rendering_filter) {
                console.log(1)
                return {
                    ...state,
                    rendering_filter: true,
                    filter_combine: true,
                    style_tatoo_card_filter: [...state.style_tatoo_card].filter(name => name.name.includes(action.arr))
                }
            }
            else if (state.rendering_filter == true) {
                return {
                    ...state,
                    rendering_filter: true,
                    filter_combine: true,
                    style_tatoo_card_filter: [...new Set(b)]

                }
            }
        } else {
            console.log('ss')
            return {
                ...state,
                filter_combine: false,
                rendering_filter: false,
                arr_filter_combine: []
                // style_tatoo_card_filter: [...state.style_tatoo_card]
            }
        }
    }
    if (action.type === 'pages') {
        card = []
        for (let i = action.page * state.card_drawn - state.card_drawn; i < action.page * state.card_drawn; i++) {
            state.style_tatoo_card[i] !== undefined && card.push(state.style_tatoo_card[i])
        }
        return {
            ...state,
            page_now: action.page,
            rendering_filter: true,
            style_tatoo_card_filter: card

        }
    }
    if (action.type === 'reset') {
        if (action.bool === true) {
            console.log('отработал')
            return {
                ...state,
                style_tatoo_card_filter: [],
                sort_plus: false,
                sort_minus: false,
                rendering_filter: false,
                filter_combine: false,
                arr_filter_combine: [],
                reset_boolean: true,
            }
        } else {
            console.log('отработал false')
            return {
            ...state,
            reset_boolean: false
        }
        }

    }
    return state
}
export let ids = (id) => ({ type: 'ids', id: id })
export let sort_plus = (value) => ({ type: 'sort_plus', value: value })
export let search = (text) => ({ type: 'search', text: text })
export let filter_caterogy = (arr) => ({ type: 'filter-caterogy', arr: arr })
export let pages = (page) => ({ type: 'pages', page: page })
export let reset = (bool) => ({ type: 'reset', bool: bool })