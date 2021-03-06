import React from 'react';
import { UserAction } from '../../action/User/action';
import { IUserState } from '../../action/User/model';
import Slider from '../slider/Slider';
import Spinner from '../layout/spinner/Spinner';
import { connect } from 'react-redux';
import { IApplicationState } from '../../store/state';


type IProps = typeof UserAction & IUserState;

export interface IUsers {
    [key: string]: any,
    code: string,
    firstName: string,
    lastName: string,
    address: string,
    phone: string
};

class GetUser extends React.Component<IProps>{
    constructor(props: any) {
        super(props);

    }
    async componentDidMount() {

        this.props.GetUserData();
    }
    render() {
        if (this.props.userList.loading) {
            return <Spinner />
        }
        return (
            <React.Fragment>
                <Slider users={this.props.userList.list} />
            </React.Fragment>
        )
    }
}

export default connect(
    (state: IApplicationState) => state.user,
    UserAction,
)(GetUser);
