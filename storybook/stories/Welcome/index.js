import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

export default class Welcome extends React.Component {
  styles = {
    wrapper: {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
    },
    header: {
      fontSize: 18,
      marginBottom: 18,
    },
    content: {
      fontSize: 12,
      marginBottom: 10,
      lineHeight: 18,
    },
  };

  showApp = event => {
    const {showApp} = this.props;
    event.preventDefault();

    if (showApp) {
      showApp();
    }
  };

  render() {
    return (
      <View style={this.styles.wrapper}>
        <Text style={this.styles.header}>
          Welcome to React Native Storybook
        </Text>
        <Text style={this.styles.content}>
          Changing text for the next commit
        </Text>
        <Text style={this.styles.content}>
          We have added some stories inside the "storybook/stories" directory
          for examples. Try editing the "storybook/stories/Welcome.js" file to
          edit this message.
        </Text>
      </View>
    );
  }
}

Welcome.defaultProps = {
  showApp: null,
};

Welcome.propTypes = {
  showApp: PropTypes.func,
};
