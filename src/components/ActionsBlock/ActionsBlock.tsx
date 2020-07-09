import  React from "react";
import { connect } from "react-redux";
import { TAppState_, TUser } from "../../typings/types";
import s from './ActionsBlock.module.css';
import { MaterialButton, ModalAlert } from "../common";
import { deleteUser, toggleFollowUser } from "../../redux/Users/actions";


const ActionsBlock = ( props : IProps ) => {
    const { isAuth, user, toggleFollowUser, deleteUser } = props;
    if ( user.id === 'deleted' ) return null;
    if ( !isAuth ) return <div className={s.actionBlock}>Please log in to subscribe</div>;
    const followBTNName = user.followed ? 'Unfollow' : 'Follow';
    const deleteBTNName = 'Delete';
    const deleteText = 'Are you sure you want to delete this user?';

    return <div className={s.actionBlock}>
                <MaterialButton name={followBTNName} clickHandler={() => toggleFollowUser(user.id)} variant={'contained'}/>
                <ModalAlert btnOpen={deleteBTNName} onConfirm={() => deleteUser(user.id)} text={deleteText}/>
           </div>
};


const mapStateToProps = (state: TAppState_) => ({
    isAuth: state.auth.isAuth,
});

const mapDispatchToProps = {
    toggleFollowUser: toggleFollowUser,
    deleteUser: deleteUser,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ActionsBlock);


interface IProps {
    user : TUser,
    isAuth?: boolean | null,
    toggleFollowUser? : any,
    deleteUser? : any
}