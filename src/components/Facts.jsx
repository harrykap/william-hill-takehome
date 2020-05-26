import React, {Component} from 'react';

export default class Facts extends Component {

    render() {
        return (
            <div className={'card'}>
                <div>Team Facts</div>
                <hr/>
                <table>
                    <tbody>
                    <tr><td align={'right'}>year formed:</td><td>{this.props.teamInfo.intFormedYear}</td></tr>
                    <tr><td align={'right'}>sport:</td><td>{this.props.teamInfo.strSport}</td></tr>
                    <tr><td align={'right'}>league:</td><td>{this.props.teamInfo.strLeague}</td></tr>
                    <tr><td align={'right'}>manager:</td><td>{this.props.teamInfo.strManager}</td></tr>
                    </tbody>
                </table>
            </div>
        );
    }
}