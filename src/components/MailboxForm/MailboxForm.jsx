import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = ({ addBox }) => {
    const [boxOwner, setBoxOwner] = useState("");
    const [boxSize, setBoxSize] = useState("Small");
    const navigate = useNavigate();

    const handleSubmit = (evt) => {
      evt.preventDefault();
      addBox({ boxOwner, boxSize });
      navigate("/mailboxes");
    };

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Mailbox Owner:
          <input type="text" value={boxOwner} onChange={(evt) => setBoxOwner(evt.target.value)} required />
        </label>
        <label>
          Mailbox Size:
          <select value={boxSize} onChange={(evt) => setBoxSize(evt.target.value)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>
        <button type="submit">Add Mailbox</button>
      </form>
    );
  };

  export default MailboxForm;
