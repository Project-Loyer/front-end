import React, { Component } from 'react';

import {
    Text,
    View,
    StyleSheet,
    Alert,
} from 'react-native';
import { Container, Content } from 'native-base';
import {LoyerHeader} from "./LoyerHeader";
import {color} from "../global/Color"

import { Agenda } from 'react-native-calendars';
import Color from "react-native-material-color";

export default class CalendarScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: {}
        };
    }

    render() {
        return (
            <Container>
                <LoyerHeader {...this.props} goBack title={"Calendario"}/>
                <Content>
                    <Agenda
                        // the list of items that have to be displayed in agenda. If you want to render item as empty date
                        // the value of date key kas to be an empty array []. If there exists no value for date key it is
                        // considered that the date in question is not yet loaded
                        items={this.state.items}
                        // callback that gets called when items for a certain month should be loaded (month became visible)
                        //loadItemsForMonth={this.loadItems.bind(this)}
                        // callback that fires when the calendar is opened or closed
                        //onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
                        // callback that gets called on day press
                        onDayPress={(day)=>{this.loadItems(day)}}
                        // callback that gets called when day changes while scrolling agenda list
                        //onDayChange={(day)=>{Alert.alert('day changed')}}
                        // initially selected day
                        selected={this.timeToString()}
                        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                        //minDate={'2012-05-10'}
                        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                        //maxDate={'2012-05-30'}
                        // Max amount of months allowed to scroll to the past. Default = 50
                        pastScrollRange={4}
                        // Max amount of months allowed to scroll to the future. Default = 50
                        futureScrollRange={4}
                        // specify how each item should be rendered in agenda
                        renderItem={this.renderItem.bind(this)}
                        // specify how each date should be rendered. day can be undefined if the item is not first in that day.
                        //renderDay={(day, item) => {return (<View />);}}
                        // specify how empty date content with no items should be rendered
                        renderEmptyDate={this.renderEmptyDate.bind(this)}
                        // specify how agenda knob should look like
                        renderKnob={() => {return (<View />);}}
                        // specify your item comparison function for increased performance
                        rowHasChanged={this.rowHasChanged.bind(this)}
                        // Hide knob button. Default = false
                        //hideKnob={true}
                        //theme={{calendarBackground: "white", agendaKnobColor: Color.LIGHTGREEN[50]}}
                        //renderDay={(day, item) => (<Text>{}</Text>)}
                    />
                </Content>
            </Container>
        );
    }

    loadItems(day) {
        setTimeout(() => {
            for (let i = -3; i < 10; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = this.timeToString(time);
                if (!this.state.items[strTime]) {
                    this.state.items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 2);
                    for (let j = 0; j < numItems; j++) {
                        this.state.items[strTime].push({
                            name: 'Item for ' + strTime,
                            height: Math.max(50, Math.floor(Math.random() * 150))
                        });
                    }
                }
            }
            //console.log(this.state.items);
            const newItems = {};
            Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
            this.setState({
                items: newItems
            });
        }, 200);
        // console.log(`Load Items for ${day.year}-${day.month}`);
    }

    renderItem(item) {
        return (
            <View style={[styles.item, {height: item.height}]}><Text style={{color:color.primary.text}} >{item.name}</Text></View>
        );
    }

    renderEmptyDate() {
        return (
            <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
        );
    }

    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }

    timeToString(time) {
        const date = time ? new Date(time) : new Date();
        return date.toISOString().split('T')[0];
    }

}

const styles = StyleSheet.create({
    item: {
        backgroundColor: color.primary.light,
        flex: 1,
        borderRadius: 2,
        padding: 10,
        marginRight: 10,
        marginTop: 10
    },
    emptyDate: {
        height: 15,
        flex:1,
        paddingTop: 30
    }
});