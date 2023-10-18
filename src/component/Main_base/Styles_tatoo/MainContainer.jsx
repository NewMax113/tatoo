import { connect } from 'react-redux'
import Main from './Main'
import { ids, sort_plus, search } from "../../../redux/post-reducer"


let post = (state) => {
  console.log(state.card.style_tatoo_card_filter)

  return {
    post: state.card.style_tatoo_card_filter == '' ? state.card.style_tatoo_card : state.card.style_tatoo_card_filter,
  }
}

export default connect(post, {ids, sort_plus, search})(Main)