import React from "react";
import { Form, Button, Row, Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "../LoginForm.css"; // Import the CSS file

const LoginForm = ({
  validated,
  signInHandler,
  inputChangeHandler,
  user: { u_email, u_password },
  loginError,
  errorMessage,
}) => {
  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={signInHandler}
      className="login-form"
    >
      <h4 className="form-title">Welcome to Smart Parking</h4>
      <Form.Group controlId="signinEmail">
        <Form.Label className="form-label">Email address*</Form.Label>
        <Form.Control
          className="form-control"
          type="email"
          placeholder="Enter email"
          name="u_email"
          value={u_email}
          onChange={inputChangeHandler}
          required
        />
      </Form.Group>

      <Form.Group controlId="signinPassword">
        <Form.Label className="form-label">Password*</Form.Label>
        <Form.Control
          className="form-control"
          type="password"
          placeholder="Password"
          name="u_password"
          value={u_password}
          onChange={inputChangeHandler}
          required
        />
      </Form.Group>

      {loginError ? (
        <div className="error">
          <span>{errorMessage}</span>
        </div>
      ) : null}
      <Button variant="primary" type="submit" className="submit-button">
        Sign In
      </Button>
    </Form>
  );
};

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      userDetail: {
        u_id: "",
        u_name: "",
        u_email: "",
        u_password: "",
        u_type: "",
      },
      loginError: false,
      errorMessage: "",
    };
  }

  inputChangeHandler(e) {
    let { name, value } = e.currentTarget;
    let { userDetail: userData } = this.state;
    userData[name] = value;
    this.setState({ userDetail: userData });
  }

  signInHandler(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      e.stopPropagation();
      this.setState({ validated: true });
      return false;
    }

    let { u_password: password, u_email: email } = this.state.userDetail;
    let body = {
      password,
      email,
    };
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body),
    };
    fetch("http://localhost:3005/api/login", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem("loggedinUser", JSON.stringify(data.users));
          this.setState({ loginError: false, errorMessage: "" });
          window.location.pathname = "/dashboard";
        } else {
          this.setState({ loginError: true, errorMessage: data.message });
        }
      })
      .catch((error) => console.log("error", error));
  }

  render() {
    return (
      <div className="login-container">
        <Container>
          <Row className="justify-content-center">
            <Col xs="12" md="6">
              <LoginForm
                validated={this.state.validated}
                user={this.state.userDetail}
                loginError={this.state.loginError}
                errorMessage={this.state.errorMessage}
                inputChangeHandler={this.inputChangeHandler.bind(this)}
                signInHandler={this.signInHandler.bind(this)}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Index;
