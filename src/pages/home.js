import { Container, Row, Col, Button, Image } from 'react-bootstrap';


const Home = () => {
  return (
    <div className="bg-light text-center py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-4">Fast & Secure Online Payments</h1>
            <p className="lead">
              Experience seamless transactions with PayEase. Whether you're a small business or an enterprise, our platform offers the tools you need to manage payments effortlessly.
            </p>
            <ul className="list-unstyled">
              <li>✔️ Easy integration with your website or app</li>
              <li>✔️ Accept payments globally in multiple currencies</li>
              <li>✔️ Real-time transaction monitoring and analytics</li>
            </ul>

          </Col>
          <Col md={6}>
            <Image src="https://via.placeholder.com/500x300" alt="Online payment illustration" fluid />
          </Col>
        </Row>
      </Container>
      <h1 id="greet">Welcome to Fast-Pay</h1>
      <section class="features">
        <h2>Why Choose Us?</h2>
        <div class="feature-cards">
          <div class="card">
            <i class="fas fa-shield-alt"></i>
            <h3>Secure</h3>
            <p>Your transactions are encrypted for maximum protection.</p>
          </div>
          <div class="card">
            <i class="fas fa-users"></i>
            <h3>User-Friendly</h3>
            <p>An intuitive interface designed for everyone.</p>
          </div>
          <div class="card">
            <i class="fas fa-sync-alt"></i>
            <h3>Real-Time</h3>
            <p>Instant transactions with zero downtime.</p>
          </div>
        </div>
      </section>
      

      


    </div>
  );
  };
  
  export default Home;
  