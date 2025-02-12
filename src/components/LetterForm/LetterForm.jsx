import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LetterForm = ({ mailboxes, addLetter }) => {
  const [mailboxId, setMailboxId] = useState('');
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addLetter({ mailboxId, recipient, message });
    navigate(`/mailboxes/${mailboxId}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Mailbox:
        <select value={mailboxId} onChange={(evt) => setMailboxId(evt.target.value)} required>
          <option value="">Select a mailbox</option>
          {mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
              {mailbox._id} - {mailbox.boxOwner}
            </option>
          ))}
        </select>
      </label>
      <label>
        Recipient Name:
        <input type="text" value={recipient} onChange={(evt) => setRecipient(evt.target.value)} required />
      </label>
      <label>
        Message:
        <textarea value={message} onChange={(evt) => setMessage(evt.target.value)} required />
      </label>
      <button type="submit">Send Letter</button>
    </form>
  );
};

export default LetterForm;
