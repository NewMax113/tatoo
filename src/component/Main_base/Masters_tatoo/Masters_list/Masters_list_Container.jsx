import Masters_list from './Masters_list'
import { connect } from "react-redux"
import { ids } from '../../../../redux/master-reducer'

let  Masters = (state) => {
    return {
        master: state.master.master
    }
}

export default connect (Masters, {ids}) (Masters_list)