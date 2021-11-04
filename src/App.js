import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { ApplicationAction } from "./ApplicationAction";
import { Form, Button } from "react-bootstrap";
import "./bootstrap.min.css";

function App() {
  const defaultDate = new Date();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [date, setDate] = useState(defaultDate);
  const [about, setAbout] = useState();
  const [reason, setReason] = useState();
  const [pavers, setPavers] = useState();
  const [file, setFile] = useState();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ApplicationAction(name, email, date, about, reason, pavers, file));
    document.getElementById("form").reset();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Pavers React Developer Application Form</h2>
      </header>
      <Form className="App-form" id="form" onSubmit={handleSubmit}>
        <Form.Group className="mb-1" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name..."
            maxLength="50"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-1" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your email address..."
            maxLength="100"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-1" controlId="formDate">
          <Form.Label>Date of Application</Form.Label>
          <Form.Control
            type="text"
            defaultValue={defaultDate}
            onChange={(e) => setDate(e.target.value)}
            required
            readOnly
          />
        </Form.Group>

        <Form.Group className="mb-1" controlId="formAbout">
          <Form.Label>About you</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            placeholder="Tell us about you..."
            maxLength="255"
            onChange={(e) => setAbout(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-1" controlId="formReason">
          <Form.Label>Reason for applying</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            placeholder="Tell us your reason for applying..."
            maxLength="255"
            onChange={(e) => setReason(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-1" controlId="formPavers">
          <Form.Label>What do you know about Pavers Ltd?</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            placeholder="Tell us what you know about Pavers Ltd..."
            maxLength="255"
            onChange={(e) => setPavers(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Picture of candidate (optional)</Form.Label>
          <Form.Control type="file" onChange={(e) => setFile(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
