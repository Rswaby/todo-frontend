import React, { Component } from 'react';
import Dayz from 'dayz';
import moment from 'moment'
// import 'dayz/dist/styles.css';
const EVENTS = new Dayz.EventsCollection([
    {
        content: 'A short event',
        range: moment.range(date.clone(),
            date.clone().add(1, 'day'))
    },
    {
        content: 'Two Hours ~ 8-10',
        range: moment.range(date.clone().hour(8),
            date.clone().hour(10))
    },
    {
        content: "A Longer Event",
        range: moment.range(date.clone().subtract(2, 'days'),
            date.clone().add(8, 'days'))
    }
]);
export default class Calendr extends Component {

    render() {
        console.log(moment().format('LLL'))
        return (
            <Dayz
                display='week'
                date={this.props.date}
                events={[]}
            />
        )
    }
}
//export default Calendr;


