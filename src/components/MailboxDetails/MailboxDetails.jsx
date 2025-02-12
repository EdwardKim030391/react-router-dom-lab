import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes, letters }) => {
  const { mailboxId } = useParams();
  const mailbox = mailboxes.find((box) => box._id === Number(mailboxId));

  if (!mailbox) {
    return <h2>Mailbox not found!</h2>;
  }

  const selectedLetters = letters.filter((letter) => letter.mailboxId === mailbox._id);

  return (
    <div>
      <h2>Mailbox Details</h2>
      <p><strong>Box Number:</strong> {mailbox._id}</p>
      <p><strong>Owner:</strong> {mailbox.boxOwner}</p>
      <p><strong>Size:</strong> {mailbox.boxSize}</p>

      <h3>Letters</h3>
      {selectedLetters.length === 0 ? (
        <p>No letters in this mailbox.</p>
      ) : (
        <ul>
          {selectedLetters.map((letter, index) => (
            <li key={index}>
              <p><strong>To:</strong> {letter.recipient}</p>
              <p>{letter.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MailboxDetails;
