import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxDetails from './components/MailboxDetails/MailboxDetails'
import LetterForm from './components/LetterForm/LetterForm';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addBox = ({ boxOwner, boxSize }) => {
    const newBox = {
      _id: mailboxes.length + 1,
      boxOwner,
      boxSize,
    };
    setMailboxes([...mailboxes, newBox]);
  };

const addLetter = ({ mailboxId, recipient, message }) => {
  const newLetter = {
      mailboxId: Number(mailboxId),
      recipient,
      message
    };
    setLetters([...letters, newLetter]);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} letters={letters} />} />
        <Route path="/new-letter" element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />} />
      </Routes>
    </Router>
  );
};

export default App;
