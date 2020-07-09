import * as React from "react";
import { connect } from "react-redux";
import { logIn } from "../../redux/Auth/actions";
import { CustomButton } from "../../components/common";
interface IProps {
    logInConnect: () => void;
}

const LogIn = ({ logInConnect }: IProps) =>  <CustomButton onClick={logInConnect} title='Log me in'/>;

const mapDispatchToProps = {
    logInConnect: logIn
};
export default connect(
    null,
    mapDispatchToProps,
)(LogIn);