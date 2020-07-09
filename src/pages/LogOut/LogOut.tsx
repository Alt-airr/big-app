import * as React from "react";
import { connect } from "react-redux";
import { logOut } from "../../redux/Auth/actions";
import { CustomButton } from "../../components/common";
interface IProps {
    logOutConnect: () => void;
}

const LogOut = ({ logOutConnect }: IProps) => <CustomButton onClick={logOutConnect} title='Log me out'/>;

const mapDispatchToProps = {
    logOutConnect: logOut
};
export default connect(
    null,
    mapDispatchToProps,
)(LogOut);