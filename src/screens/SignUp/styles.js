const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;

export default {

    container:{
      flex: 1,
      width:'100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    logo:{
      height:300,
      width:300,
      marginTop: '10%',
      marginBottom: '5%',
      backgroundColor: '#555555',
    },

    bg: {
      width:'100%',
      height:'100%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer:{

      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: '10%',
      marginVertical: '10%'
    },
    buttonText: {
        fontSize: 15,
        color: 'white',
        alignSelf: 'center'
      },
      button: {
        height: '100%',
        backgroundColor: '#166CBC',
        borderColor: '#166CBC',
        borderWidth: 2,
        alignSelf: 'stretch',
        justifyContent: 'center'
      }

};
