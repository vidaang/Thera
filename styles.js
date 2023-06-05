import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  pages: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Navigation Bar
  navBar: {
    backgroundColor: 'white',
    height: 72,
  },
  navIcon: {
    width: 24,
    height: 24,
  },

  // Chatbot Page
  botBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#DCF8C6',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
    maxWidth: '80%',
  },
  chatBubble: {
    backgroundColor: '#F2F2F2',
    borderRadius: 50,
    padding: 10,
    marginBottom: 10,
    maxWidth: '80%',
    alignSelf: 'flex-start',
  },
  chatContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  errorBubble: {
    alignSelf: 'center',
  },
  errorMessage: {
    color: 'red',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 8,
    marginRight: 8,
    marginLeft: 10
  },
  messageText: {
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#AFDEBE',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,

  },
  sendButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  userBubble: {
    marginLeft: 50,
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    padding: 10,
    marginBottom: 8,
    maxWidth: '80%',
  },
  
  // Settings Page
  
  leftAligned: {
    marginLeft: 85,
    marginRight: 20,
  },
  profilePicture: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  rightAligned: {
    flex: 1,
  },
  settings: {
    width: 300,
    backgroundColor: '#AFDEBE',
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  settingsText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 35,
  },
});

export default styles;
