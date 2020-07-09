import React from "react";
import { ICurrent, MatchParams, TUser } from "../../typings/types";
import { deleteUser, toggleFollowUser } from "../../redux/Users/actions";
import { connect } from "react-redux";
import s from './UserPage.module.css';
import { NotFound } from "../";
import { UserPhoto, LinkBack, ActionsBlock } from "../../components";
import { MaterialTable } from "../../components/common";
import { createTableRow } from "../../helpers";


const UserPage = ({ users, match } : PTypes ) => {
    const userID = match.params.id.slice(1);
    const currentUser = users.find(u => u.id === userID);
    if (!userID || !currentUser || userID === 'deleted') return <NotFound/>;

    let name = `${currentUser.name.first} ${currentUser.name.last}`;

    const tableRows = [
        createTableRow('Phone : ', currentUser.phone),
        createTableRow('Email : ', currentUser.email),
        createTableRow('City : ', currentUser.location.city),
        createTableRow('Age : ', currentUser.dob.age),
    ];

    return(
        <div className={s.profilePage}>
            <LinkBack/>
            <div className={s.pageHeader}>
                <div className={s.avatarBlock}>
                    <UserPhoto photo={currentUser.picture} />
                    <ActionsBlock user={currentUser}/>
                </div>
                <div className={s.userInfo}>
                    <div className={s.userName}>
                        {name}
                    </div>
                    <MaterialTable rows={tableRows}/>
                </div>
            </div>
        </div>
    )
};

type PTypes = {
    deleteUser: any,
    toggleFollowUser: any,
    isAuth: boolean | null,
    users : Array<TUser>,
    match: {
        params: MatchParams
    }
}

const mapDispatchToProps = {
    toggleFollowUser: toggleFollowUser,
    deleteUser: deleteUser,
};
const mapStateToProps = (state: ICurrent) => ({
    isAuth: state.auth.isAuth,
    users: state.users.users,
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserPage);