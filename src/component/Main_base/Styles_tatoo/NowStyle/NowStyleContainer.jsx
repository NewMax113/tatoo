import { connect } from "react-redux"
import NowStyle from "./NowStyle"
import { ids } from "../../../../redux/post-reducer"

let card = (state) => {
    return {
        card: state.card.card_noww
    }
}

// let fun = (dispatch) => {
//     return {
//         ids: (id) => {
//             dispatch(ids(id))
//         },
         
//     }
// }

export default connect (card, ) (NowStyle)