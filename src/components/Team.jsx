import React, {Component} from 'react';

export default class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamInfo: {
                strTeam: '',
                strTeamBadge: '',
            }
        };
    }


    componentDidMount() {
        const teamUrl = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${this.props.name}`;
        fetch(teamUrl)
            .then(result => result.json())
            .then(data => {
                console.log('have data', data);
                this.setState({teamInfo: data.teams[0]})
                return data;
            })
            .catch(error => {
                console.log('there was an error', error);
                return error;
            })
    }

    render() {
        return (
            <React.Fragment>
                <h1>
                    <img src={this.state.teamInfo.strTeamBadge} alt={'team badge'} className={'badge'} />
                    <span className={'yankee-script'}>&nbsp;&nbsp;{this.state.teamInfo.strTeam}</span>
                </h1>
                <hr />
            </React.Fragment>
        )
    }
}