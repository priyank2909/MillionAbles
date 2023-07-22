import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ObjectDetection from "./screens/ObjectDetection";
import SignDetection from "./screens/SignDetection";
import SpeechToText from "./screens/SpeechToText";
import TextToSpeech from "./screens/TextToSpeech";
// import PDFReader from "./screens/PDFReader";
import { Home } from './screens/Home.jsx'
import { VisuallyImpaired } from "./screens/VisuallyImpaired";
import { DeafDumb } from "./screens/DeafDumb";
import { Dyslexia } from "./screens/Dyslexia";
import { DyslexiaReader } from "./screens/DyslexiaReader";
import { Chat } from "./screens/Chat";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes >
          <Route path="/" element={<Home />} />   
          <Route path="/visually_impaired" element={<VisuallyImpaired />} />   
          <Route path="/deaf_and_dumb" element={<DeafDumb />} />   
          <Route path="/dyslexia" element={<Dyslexia />} />        
          <Route path="/speech_to_text" element={<SpeechToText />} />   
          <Route path="/text_to_speech" element={<TextToSpeech />} />   
          <Route path="/object_detection" element={<ObjectDetection />} />
          <Route path="/dyslexia_reader" element={<DyslexiaReader />} />
          <Route path="/sign_detection" element={<SignDetection />} />
          <Route path="/chat" element={<Chat />} />     
        </Routes>
      </Router>
    </div>
  );
}

export default App;