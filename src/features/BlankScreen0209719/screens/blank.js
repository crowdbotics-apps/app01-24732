import { connect } from "react-redux"
import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

class Blank extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      TextInput_11: "",
      DateTimePicker_13: new Date(""),
      TextInput_15: "",
      DateTimePicker_17: new Date(""),
      Switch_19: true,
      CheckBox_401: true,
      CheckBox_414: true
    }
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }

  render = () => (
    <View>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <View />
      <Text>Sample text content</Text>
      <Text>Sample text content</Text>
      <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        style={styles.Image_21}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_11}
        onChangeText={nextValue => this.setState({ TextInput_11: nextValue })}
      />
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_13}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_13: selectedDate })
        }
      />
      <TextInput
        placeholder="Number Input Placeholder"
        keyboardType="numeric"
        value={this.state.TextInput_15}
        onChangeText={nextValue => this.setState({ TextInput_15: nextValue })}
      />
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_17}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_17: selectedDate })
        }
      />
      <Switch
        trackColor={{ true: "#409EFF", false: "#C0CCDA" }}
        style={styles.Switch_19}
        value={this.state.Switch_19}
        onValueChange={nextChecked => this.setState({ Switch_19: nextChecked })}
      />
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_401}
        onPress={nextChecked => this.setState({ CheckBox_401: nextChecked })}
      />
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={this.state.CheckBox_414}
        onPress={nextChecked => this.setState({ CheckBox_414: nextChecked })}
      />
      <Icon name="star" />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Button_3: {},
  View_432: {},
  Text_7: {},
  Text_9: {},
  Image_21: { height: 100 },
  TextInput_11: {},
  DateTimePicker_13: {},
  TextInput_15: {},
  DateTimePicker_17: {},
  Switch_19: { alignSelf: "flex-start" },
  CheckBox_401: {},
  CheckBox_414: {},
  Icon_428: {}
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
