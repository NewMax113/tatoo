import Masters_list from './Masters_list'
import { connect } from "react-redux"

let  Masters = (state) => {
    return {
        master: state.master.master
    }
}

export default connect (Masters) (Masters_list)