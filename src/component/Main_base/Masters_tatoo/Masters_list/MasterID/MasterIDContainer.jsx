import MasterID from "./MasterID"
import { connect } from "react-redux"


let master = (state) => {
  return {
    master: state.master.master_now
  }
}

export default connect (master) (MasterID)