import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
  { label: 'Achanguttaipatti', value: '1' },
  { label: 'Achanguttapattipudur', value: '2' },
  { label: 'Adikarapatti', value: '3' },
  { label: 'Adimalaipatti', value: '4' },
  { label: 'Agraharapulaveri', value: '5' },
  { label: 'Agraharapulaveri', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const DropdownComponent = (props) => {
  const [value, setValue] = useState(null);

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      // iconStyle={styles.iconStyle}
      data={props.data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={props.placeholderText}
      searchPlaceholder="Search..."
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
      // renderLeftIcon={() => (
      //   <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
      // )}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    padding:hp('1%'),
    width: "100%",
    height: hp('6%'),
    borderRadius: 5,
    borderBottomWidth:1,
    borderBottomColor:'rgba(54, 69, 79, 0.5)' ,
  },
  // icon: {
  //   marginRight: 5,
  // },
  placeholderStyle: {
    fontSize: hp('2%'),
    color:'#808080',
  },
  selectedTextStyle: {
    fontSize: hp('2%'),
    color: "#36454F",
  },
  // iconStyle: {
  //   width: 20,
  //   height: 20,
  // },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});