import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions
} from 'react-native';
import {Calendar} from './../calendar';

const { width } = Dimensions.get('window');
const calendarHeight = 380;
const calendarWidth = width - 30;
const blockedDates = [
  '2018-01-06',
  '2018-01-07',
  '2018-01-08',
  '2018-01-09',
  '2018-01-20',
  '2018-01-25',
  '2018-01-27',
  '2018-01-29',
  '2018-01-30',
  '2018-02-07',
  '2018-02-08',
  '2018-02-25',
  '2018-03-27',
  '2018-03-29',
  '2018-03-30',
];
const appointDates = {
  '2018-01-03': { count: 7 },
  '2018-01-10': { count: 3 },
  '2018-01-11': { count: 4 },
  '2018-01-13': { count: 5 },
  '2018-01-14': { count: 1 },
  '2018-01-15': { count: 6 },
  '2018-01-16': { count: 2 },
  '2018-01-17': { count: 2 },
  '2018-01-22': { count: 4 },
  '2018-01-23': { count: 2 },
  '2018-02-02': { count: 2 },
  '2018-02-04': { count: 1 },
  '2018-02-06': { count: 8 },
  '2018-04-12': { count: 2 },
  '2018-04-14': { count: 1 },
  '2018-04-26': { count: 8 },
};
export default class CalendarsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }
  
  render() {
    const current = new Date();
    return (
      <View style={{ flex: 1, backgroundColor: 'orange', alignItems: 'center' }}>
        <View style={{ height: calendarHeight }}>
          <Calendar
            style={[{height: calendarHeight, width: calendarWidth}]}
            current={current}
            hideArrows={false}
            hideExtraDays={true}
            disableMonthChange
            appointDates={appointDates}
            onDayPress={(value) => console.info('value', value)}
          />
        </View>
      </View>
    );
  }

  // render() {
  //   return (
  //     <ScrollView style={styles.container}>
  //       <Text style={styles.text}>Calendar with selectable date and arrows</Text>
  //       <Calendar
  //         onDayPress={this.onDayPress}
  //         style={styles.calendar}
  //         hideExtraDays
  //         markedDates={{[this.state.selected]: {selected: true}}}
  //
  //       />
  //       <Text style={styles.text}>Calendar with marked dates and hidden arrows</Text>
  //       <Calendar
  //         style={styles.calendar}
  //         current={'2012-05-16'}
  //         minDate={'2012-05-10'}
  //         maxDate={'2012-05-29'}
  //         firstDay={1}
  //         markedDates={{
  //           '2012-05-23': {selected: true, marked: true},
  //           '2012-05-24': {selected: true, marked: true, dotColor: 'green'},
  //           '2012-05-25': {marked: true, dotColor: 'red'},
  //           '2012-05-26': {marked: true},
  //           '2012-05-27': {disabled: true}
  //         }}
  //         // disabledByDefault={true}
  //         hideArrows={true}
  //       />
  //       <Text style={styles.text}>Calendar with custom day component</Text>
  //       <Calendar
  //         style={[styles.calendar, {height: 300}]}
  //         dayComponent={({date, state}) => {
  //           return (<View style={{flex: 1}}><Text style={{textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black'}}>{date.day}</Text></View>);
  //         }}
  //       />
  //       <Text style={styles.text}>Calendar with period marking and spinner</Text>
  //       <Calendar
  //         style={styles.calendar}
  //         current={'2012-05-16'}
  //         minDate={'2012-05-10'}
  //         displayLoadingIndicator
  //         markingType={'period'}
  //         theme={{
  //           calendarBackground: '#333248',
  //           textSectionTitleColor: 'white',
  //           dayTextColor: 'red',
  //           todayTextColor: 'white',
  //           selectedDayTextColor: 'white',
  //           monthTextColor: 'white',
  //           selectedDayBackgroundColor: '#333248',
  //           arrowColor: 'white',
  //           // textDisabledColor: 'red',
  //           'stylesheet.calendar.header': {
  //             week: {
  //               marginTop: 5,
  //               flexDirection: 'row',
  //               justifyContent: 'space-between',
  //               backgroundColor: 'orange'
  //             }
  //           }
  //         }}
  //         markedDates={{
  //           '2012-05-17': {disabled: true},
  //           '2012-05-08': {textColor: '#666'},
  //           '2012-05-09': {textColor: '#666'},
  //           '2012-05-14': {startingDay: true, color: 'blue', endingDay: true},
  //           '2012-05-21': {startingDay: true, color: 'blue'},
  //           '2012-05-22': {endingDay: true, color: 'gray'},
  //           '2012-05-24': {startingDay: true, color: 'gray'},
  //           '2012-05-25': {color: 'gray'},
  //           '2012-05-26': {endingDay: true, color: 'gray'}}}
  //         hideArrows={false}
  //       />
  //       <Text style={styles.text}>Calendar with multi-dot marking</Text>
  //       <Calendar
  //         style={styles.calendar}
  //         current={'2012-05-16'}
  //         markingType={'multi-dot'}
  //         markedDates={{
  //           '2012-05-08': {dots: [{key: 'vacation', color: 'blue', selectedDotColor: 'white'}, {key: 'massage', color: 'red', selectedDotColor: 'white'}], selected: true},
  //           '2012-05-09': {dots: [{key: 'vacation', color: 'blue', selectedColor: 'red'}, {key: 'massage', color: 'red', selectedColor: 'blue'}], disabled: true}
  //         }}
  //         hideArrows={false}
  //       />
  //       <Text style={styles.text}>Calendar with week numbers</Text>
  //       <Calendar
  //         onDayPress={this.onDayPress}
  //         style={styles.calendar}
  //         hideExtraDays
  //         showWeekNumbers
  //         markedDates={{[this.state.selected]: {selected: true}}}
  //       />
  //     </ScrollView>
  //   );
  // }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: 'gray'
  }
});
