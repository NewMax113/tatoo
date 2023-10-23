import { connect } from 'react-redux'
import Main from './Main'
import { ids, sort_plus, search, filter_caterogy, pages, reset,  } from "../../../redux/post-reducer"


let post = (state) => {
  console.log(state.card.style_tatoo_card_filter)

  return {
    post: state.card.rendering_filter == true ? state.card.style_tatoo_card_filter : state.card.style_tatoo_card,
    total_page: Math.ceil(state.card.total_page()/state.card.card_drawn),
    reset_boolean: state.card.reset_boolean
  }
}

export default connect(post, { ids, sort_plus, search, filter_caterogy, pages, reset,  })(Main)
