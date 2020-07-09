import React, { useMemo, useState } from "react";
import { connect } from "react-redux";
import { TAppState_, TUser } from "../../typings/types";
import  { UserCard, UsersFilter }  from "../../components";
import { Preloader } from '../../components/common'
import s from './Users.module.css'
interface IProps {
    users : Array<TUser>,
    isFetching : boolean,
}

const Users = (props : IProps) => {
    const { users, isFetching } = props;
    const [filteredUsers, setFilteredUsers] = useState([]);
    const usersForMap = filteredUsers.length > 0 ? filteredUsers : users;
    const usersList = useMemo(() => usersForMap.map((u: TUser) =>  <UserCard user={u} key={u.login.uuid} />), [usersForMap]);

    if (isFetching) return <Preloader />;

    return  <div className={s.usersWrapper}>
                <UsersFilter users={users} setFilteredUsers={setFilteredUsers}/>
                <div className={s.usersList}>
                    {usersList}
                </div>
             </div>
};


const mapStateToProps = (state: TAppState_) => ({
    users: state.users.users,
    isFetching: state.users.isFetching
});
export default connect(
    mapStateToProps,
    null,
)(Users);