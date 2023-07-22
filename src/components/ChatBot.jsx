import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

const theme = {
  background: '#f5f8fb',
  headerBgColor: '#28FF64',
  fontFamily: 'Helvetica Neue',
  headerFontColor: '#0F092D',
  headerFontSize: '15px',
  botBubbleColor: '#28FF64',
  botFontColor: '#0F092D',
  userBubbleColor: '#28FF64',
  userFontColor: '#0F092D',
};

const steps = [
  {
    id: '1',
    message: 'Hello! What is your name?',
    trigger: 'name',
  },
  {
    id: 'name',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}! How can I assist you today?',
    trigger: '4',
  },
  {
    id: '4',
    options: [
      {
        value: 'about',
        label: 'Tell me about yourself',
        trigger: '5',
      },
      {
        value: 'help',
        label: 'I need help with the modules',
        trigger: 'help',
      },
      {
        value: 'website',
        label: 'What can this website do',
        trigger: '6',
      },
      {
        value: 'quit',
        label: 'Quit',
        trigger: '7',
      },
    ],
  },
  {
    id: '5',
    message: 'I am a chatbot who can guide you through the website and help you out',
    trigger: '4',
  },
  {
    id: '6',
    message: 'This website has multiple modules to help you in communicating with others easily',
    trigger: '4',
  },
  {
    id: 'help',
    message: 'What do you need help with?',
    trigger: 'help-options',
  },
  {
    id: 'help-options',
    options: [
      {
        value: 'speechtotext',
        label: 'Speechtotext Module',
        trigger: 'speech-help',
      },
      {
        value: 'texttospeech',
        label: 'Texttospeech Module',
        trigger: 'text-help',
      },
      {
        value: 'objectdetection',
        label: 'ObjectDetection Module',
        trigger: 'object-help',
      },
      {
        value: 'signdetection',
        label: 'SignDetection Module',
        trigger: 'sign-help',
      },
      {
        value: 'dyslexiareader',
        label: 'DyslexiaReader Module',
        trigger: 'dyslexia-help',
      },
    ],
  },
  {
    id: 'speech-help',
    message: 'SpeechToText could be used in such a way that you can convert the speech provided by the user through the microphone and would be converted to text. ',
    trigger: '4',
  },
  {
    id: 'text-help',
    message: 'TextToSpeech could be used to input the text in the Input box and hear it out with the speaker of the device or an external speaker.',
    trigger: '4',
  },
  {
    id: 'object-help',
    message: 'Object Detection is the way where camera is being accessed and various objects can be showed in the camera for understanding what the object defines.',
    trigger: '4',
  },
  {
    id: 'sign-help',
    message: 'Sign Detection is the way where the camera is being accessed and helps the user to communicate with people with the help of signs or gestures.',
    trigger: '4',
  },
  {
    id: 'dyslexia-help',
    message: 'Dyslexia Reader is a way to convert and extract the text in image. After uploading the image, a canvas would be made for that image and this canvas would help in extracting the text in the box provided below.',
    trigger: '4',
  },
  {
    id: '7',
    message: 'Thank you for chatting with me today! Have a great day.',
    end: true,
  },
];

function CustomChatbot() {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        steps={steps}
      />
    </ThemeProvider>
  );
}

export default CustomChatbot;
