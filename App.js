import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button';


export default function App() {
  const [weight, setWeight] = useState(0);
  const [dose, setDose] = useState(0);
  const [hour, setHour] = useState(0);
  const [gender, setGender] = useState('male');
  const [promiles, setPromiles] = useState(0);

  const genders = [
        {label: 'Male',
         value: 'male'},

        {label: 'Female',
          value: 'female'}
  ];
  
  
  const hours = [
      {label: '1 Hours', value: '1'},
      {label: '2 Hours', value: '2'},
      {label: '3 Hours', value: '3'},
      {label: '4 Hours', value: '4'},
      {label: '5 Hours', value: '5'},
      {label: '6 Hours', value: '6'},
      {label: '7 Hours', value: '7'},
      {label: '8 Hours', value: '8'},
      {label: '9 Hours', value: '9'},
      {label: '10 Hours', value: '10'},
      {label: '11 Hours', value: '11'},
      {label: '12 Hours', value: '12'},
      {label: '13 Hours', value: '13'},
  ];

  const doses = [
      {label: '1 Dose', value: '1' },
      {label: '2 Doses', value: '2'},
      {label: '3 Doses', value: '3'},
      {label: '4 Doses', value: '4'},
      {label: '5 Doses', value: '5'},
      {label: '6 Doses', value: '6'},
      {label: '7 Doses', value: '7'},
      {label: '8 Doses', value: '8'},
      {label: '9 Doses', value: '9'},
      {label: '10 Doses', value: '10'},
      {label: '11 Doses', value: '11'},
      {label: '12 Doses', value: '12'},
      {label: '13 Doses', value: '13'},
     ];


  function calculate() {
    
    let result = 0;
    let litres = dose * 0.33;
    let grams = litres * 8 * 4.5;
    let burn = weight / 10;
    let gramsleft = grams - burn * hour;

    if (gender === 'male') {
        result = gramsleft / (weight * 0.7);
    } 
    
    else {
        result = gramsleft / (weight * 0.6);
    }
    
    if (result < 0) {
      result = 0;
    }
    
    else {
      setPromiles(result);
    }
    
  }
}
return (
  <View style={styles.container}>
    <View style={styles.spot}>

      <Text>Weight</Text>

        <TextInput onChangeText={text=> setWeight(text)}
        placeholder="in kilograms"
        keyboardType='numeric'>
        </TextInput>
    </View>

    <View style={styles.spot}>

      <Text> Doses </Text>

      <Picker 
      onValueChange={(itemValue) => setDose(itemValue)}

      selectedValue={dose}>

       {doses.map((dose,index) => (
         <Picker.Item key={index} label={dose.label} value={dose.value}/>
       ))
       }
       </Picker>
      </View>

      <View style={styles.spot}>

      <Text> Hours </Text>

      <Picker
      onValueChange={(itemValue) => setHour(itemValue)}
      selectedValue={hour}>
       {hours.map((hour,index) => (
         <Picker.Item key={index} label={hour.label} value={hour.value}/>
       ))
       }
       </Picker>
      </View>

      <View style={styles.spot}>

       <Text> Gender </Text>

         <RadioForm
          style={styles.radio}
          buttonSize = {10}
          radio_props={genders}
          initial={0}
          onPress={(value) => {setGender(value)}}/>

      </View>

      <View style={styles.spot}>

        <Text>Promiles</Text>

        <Text>{promiles.toFixed(2)}</Text>

      </View>

      <View style={styles.spot}>

      <Button onPress={calculate} title="Calculate"></Button>

      </View>

    </View> 
);


const styles = StyleSheet.create({
  container: {

    flex: 1,
    paddingTop: 30,
    
  },

  spot: {

    margin: 10,

  },

  radio: {

  marginTop: 10,
  marginBottom: 10,
  
}

});
