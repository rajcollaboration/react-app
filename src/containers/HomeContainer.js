
import { connect } from "react-redux";
import Home from "../components/Home";
import { addtocart } from "../services/actions/Actions";
const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addtocart(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)

// export default Home;