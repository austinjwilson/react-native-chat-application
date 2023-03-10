// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, iframe } from 'react-native';
// import RenderHTML from 'react-native-render-html';
// import { WebView } from 'react-native-webview';
// import { setDisabled } from 'react-native/Libraries/LogBox/Data/LogBoxData';
// import IframeRenderer from '@native-html/iframe-plugin';

// // const renderers = {
// //   iframe: IframeRenderer
// // };

// export default function App() {
//   // let content = `<iframe src='https://www.youtube.com/embed/sX1Y2JMK6g8' allowfullscreen><iframe>`;
//   // let content = `<iframe src='https://deadsimplechat.com/uJfajLFA8' width="100%" height="600px"><iframe>`;
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app! Test</Text>
//       <View style={styles.container}>
//         <WebView
//           originWhitelist={['*']}
//           url={'https://google.com/'}
//           //  source={{uri: 'https://google.com/'}}
//           //  javaScriptEnabled={true}
//           //  domStorageEnabled={true}
//           //  startInLoadingState={true}
//         // source={{ uri: 'https://deadsimplechat.com/uJfajLFA8' }}
//         // style={{marginTop: 5}}
//       />
//         {/* <RenderHTML
//           renderers={renderers}
//           WebView={WebView}
//           source={{ html: content, }}
//           defaultWebViewProps={{}}
//         /> */}
//       </View>
//       {/* <WebView
//         originWhitelist={['*']}
//         source={{ html: "<iFrame src='https://deadsimplechat.com/uJfajLFA8' />" }}
//         // source={{ html: '<h1> Hellow World </h1>' }}
//       /> */}
//         {/* <iframe src="https://deadsimplechat.com/uJfajLFA8" width="100%" height="600px" /> */}
//       <StatusBar style="auto" />
//       </View>
//   );
// }

// // ReactDOM.render(<p><iframe src="https://deadsimplechat.com/uJfajLFA8" width="100%" height="600px" /></p>)

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// // Libraries
// // import React from "react";
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   ActivityIndicator,
// //   Dimensions,
// // } from "react-native";
// // import IframeRenderer from "@native-html/iframe-plugin";
// // import RenderHTML from "react-native-render-html";
// // import WebView from "react-native-webview";

// // const renderers = {
// //   iframe: IframeRenderer,
// // };

// // function App() {
// //   const contentWidth = Dimensions.get("screen").width * 0.9;
// //   let content = `<iframe src='https://www.youtube.com/embed/sX1Y2JMK6g8' allowfullscreen></iframe>`;
// //   return (
// //     <View>
// //       <View style={styles.item}>
// //         <View style={styles.informations}>
// //           <View>
// //             <Text style={styles.creator}>John Doe</Text>
// //             <Text style={styles.date} numberOfLines={2} ellipsizeMode="tail">
// //               Sur le groupe "Test"
// //             </Text>
// //           </View>
// //         </View>
// //         <View style={styles.content}>
// //           <Text style={styles.description}>
// //             <RenderHTML
// //               renderers={renderers}
// //               WebView={WebView}
// //               source={{
// //                 html: content,
// //               }}
// //               contentWidth={contentWidth}
// //               defaultWebViewProps={{}}
// //               renderersProps={{
// //                 iframe: {
// //                   scalesPageToFit: true,
// //                   webViewProps: {
// //                     allowsFullScreen: true,
// //                   },
// //                 },
// //               }}
// //               baseFontStyle={styles.contentMessage}
// //               tagsStyles={{
// //                 p: { marginTop: 15, marginBottom: 0 },
// //                 iframe: {
// //                   marginTop: 15,
// //                   borderRadius: 5,
// //                   marginHorizontal: 0,
// //                 },
// //               }}
// //             />
// //           </Text>
// //         </View>
// //       </View>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   item: {
// //     borderColor: 'blue',
// //     borderBottomWidth: 1,
// //     padding: 20,
// //     backgroundColor: "white",
// //   },
// //   informations: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },
// //   creator: {
// //     fontWeight: "bold",
// //     // fontFamily: "Lato-Bold",
// //     fontSize: 16,
// //     marginBottom: 5,
// //   },
// //   date: {
// //     color: 'grey',
// //     width: Dimensions.get("screen").width * 0.75,
// //   },
// //   content: {
// //     marginTop: 10,
// //   },
// // });

// // export default App;
import * as React from 'react';
import { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, View, Button, Text, Script } from 'react-native';
import Constants from 'expo-constants';

require("./Deadsimplechat");
require("./Chatsdk");

export default function App() {
  const [sdk, setSDK] = useState(0);
//   (async () => {
//     // DSChatSDK construction accepts two parameters:
//     // 1. Chat Room Id
//     // 2. ID of the iFrame tag
//     // 3. Dead Simple Chat Public API Key.
//     const sdk = new DSChatSDK("uJfajLFA8", "chat-frame", "pub_744537383564554a39415a58634d6634614c563752304e5f514c6868726f514964617548394f447870734363326b7853")
//     // Call the connect method to connect the SDK to the Chat iFrame.
//     await sdk.connect();
// });
  useEffect(() => {
    (async () => {
      //DSChatSDK construction accepts two parameters:
      //1. Chat Room Id
      //2. ID of the tag
      //3. Dead Simple Chat Public API Key
      const asdk = new DSChatSDK("uJfajLFA8", "chat-frame", "pub_744537383564554a39415a58634d6634614c563752304e5f514c6868726f514964617548394f447870734363326b7853")
      //Calling the connect method to connect to the SDK to the Chat
      await asdk.connect();
      setSDK(asdk);
    // });
    })();
  }, [])

  function join(useEffect) {
    sdk.join({
      username: "John"
    });
  }
  

  function logout(useEffect) {
    sdk.logout(useEffect);
  }

  // sdk.join();
  function message(sdk) {
    sdk.sendMessage("Testing 123");
  }

  
  function login () {
    sdk.joinRoom({
      username: "James Bond",
    });
    sdk.loadCustomization({
      backgroundColor: "#ff3",
      textColor: "black",
      chatMessageFont: "Nunito",
    });
  }
  // console.log(sdk.logout());

  return (
    <View style={styles.container}>
        {/* <button onClick={() => logout()} title='logout-button'>Logout</button> */}
      <Button onPress={() => logout()} title="Logout"></Button>
      {/* <Button onPress={() => console.log('Button Pressed')} title="Logout"></Button> */}
      {/* <Button onPress={() => sdk.logout()} title="Logout"></Button> */}
      {/* <iframe id="chat-frame" src="https://deadsimplechat.com/uJfajLFA8" width="400px" height="600px"></iframe> */}
      <WebView
        originWhitelist={['*']}
      // style={styles.container}
        /* Testing to see if it works */
      // source={{ uri: 'https://expo.dev' }}
      // source={{ uri: 'https://google.com/' }}
        
        /* Renders Full Screen */
        // source={{ uri: 'https://deadsimplechat.com/uJfajLFA8', id: "chat-frame" }}
        /* Renders Small Screen */
        source={{ html: "<iFrame src='https://deadsimplechat.com/uJfajLFA8' width='700px' height='900px' allowfullscreen=true />" }}
        // source={{ html: "<iFrame src='https://deadsimplechat.com/uJfajLFA8' style='border:none;height:900px;width:600px' allow='fullscreen' title='chat-frame' />" }}

      />
      <Button onPress={() => join()} title="Login James Bond"></Button>
      {/* <Button onPress={() => console.log('Button Pressed')} title="Login"></Button> */}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
