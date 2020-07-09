import React, {useState} from "react";
import { TAppState_, TUser } from "../../typings/types";
import { connect } from "react-redux";
import s from './UserCard.module.css';
import { Link } from "react-router-dom";
import { UserPhoto, ActionsBlock } from "../";

export const UserCard = (props : PTypes) => {
    const { user} = props;
    const [showActions, setShowActions] = useState(false);
    if (!user) return null;
    const actions = showActions ?  <ActionsBlock user={user}/> : null;

    return(
        <div className={s.profileCard}
             onMouseEnter={() => setShowActions(true)}
             onMouseLeave={() => setShowActions(false)}>
            <aside>
                <div className={s.cardHeader}>
                    <Link to={`users:${user.id}`}  >
                        <UserPhoto photo={user.picture} />
                    </Link>
                    <div className={s.name}>
                        <h1>{`${user.name.first} ${user.name.last}`}</h1>
                    </div>
                </div>
                {actions}
            </aside>
        </div>
    )
}

const mapStateToProps = (state: TAppState_) => ({
    users: state.users.users
});

export default connect(
    mapStateToProps,
    null,
)(UserCard);

type PTypes = {
    user?: TUser
}
