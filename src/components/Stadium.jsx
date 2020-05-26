import React, {Component} from 'react';

export default class Stadium extends Component {

    render() {
        const stadium = this.props.stadiumInfo;
        return (
            <div className={'card'}>
                <div>Stadium</div>
                <hr />
                <div>
                    {stadium.strStadium}
                </div>
                <div>
                    {stadium.strStadiumLocation}
                </div>
                <div>
                    <img className={'stadium'} src={stadium.strStadiumThumb} alt={stadium.strStadium} />
                </div>
                <div>{stadium.strStadiumDescription}</div>
            </div>
        );
    }
}