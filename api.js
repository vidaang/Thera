import styles from './styles'
import React, { useState } from 'react';
import { TouchableOpacity, Text, View, TextInput, Button, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard} from 'react-native';

const ChatbotScreen = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [networkError, setNetworkError] = useState(false);

  const sendMessageToChatbot = async () => {
    if (message.trim() === '') {
      return; // Ignore empty messages
    }
    
    try {
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      setResponse(data.response);
      setNetworkError(false);
    } catch (error) {
      console.error('Error:', error);
      setNetworkError(true);
    } finally {
      // Add the user's message to the chat history
      setChatHistory(prevChatHistory => [
        ...prevChatHistory,
        { message, from: 'user' }
      ]);
      setMessage('');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.pages}>
        <ScrollView contentContainerStyle={styles.chatContainer}>
          {/* Display chat bubbles */}
          {chatHistory.map((chat, index) => (
            <View
              key={index}
              style={[
                styles.chatBubble,
                chat.from === 'bot' ? styles.botBubble : styles.userBubble,
              ]}
            >
              <Text style={styles.messageText}>{chat.message}</Text>
              {networkError && (
                <View style={styles.errorBubble}>
                  <Text style={styles.errorMessage}>Message not sent</Text>
                </View>
              )}
            </View>
          ))}
        </ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.inputContainer}
        >
          <TextInput
            onChangeText={setMessage}
            placeholder="Enter your message"
            style={styles.input}
          />
          <TouchableOpacity onPress={sendMessageToChatbot} style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatbotScreen;
