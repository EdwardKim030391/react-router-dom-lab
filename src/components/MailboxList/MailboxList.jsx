import { Link } from 'react-router-dom';
import '../../index.css'

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
      <h2>Mailbox List</h2>
      <div className="mailbox">
        {mailboxes.map((mailbox) => (
          <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`}>
            {mailbox.boxOwner} ({mailbox.boxSize})
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MailboxList;
