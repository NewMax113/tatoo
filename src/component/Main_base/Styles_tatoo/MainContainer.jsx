import { connect } from 'react-redux'
import Main from './Main'
import { ids } from "../../../redux/post-reducer"

let post = (state) => {
  
  return {
    post: state.card.style_tatoo_card 
  }
}

let fun = (dispatch) => {
  return {
      ids: (id) => {
          dispatch(ids(id))
      },
       
  }
}

export default connect (post, fun) (Main)