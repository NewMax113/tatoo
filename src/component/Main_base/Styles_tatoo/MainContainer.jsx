import { connect } from 'react-redux'
import Main from './Main'
import { ids, sort_plus, search } from "../../../redux/post-reducer"


let post = (state) => {
  console.log(state.card.style_tatoo_card_filter)
  return {
    post: state.card.style_tatoo_card,
    post_filter: state.card.style_tatoo_card_filter
  }
}

// let fun = (dispatch) => {
//   return {
//       ids: (id) => {
//           dispatch(ids(id))
//       },

//   }
// }



// export default connect (post, fun, getCard) (Main)
export default connect(post, {ids, sort_plus, search})(Main)