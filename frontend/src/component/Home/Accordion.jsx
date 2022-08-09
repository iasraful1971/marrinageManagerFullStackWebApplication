import { Accordion, Badge, Button, Grid, Space } from "@mantine/core";
import pic from "../../../src/image/faq.8116aa7d.svg";
const Accordions = () => {
  
  return (
    <div className="main-faq">
      <Space h="lg" />
      <Space h="lg" />
      <Space h="lg" />
      <Badge variant="gradient" gradient={{ from: "indigo", to: "cyan" }}>
        Quick Questions and Answer
      </Badge>
      <Space h="lg" />
      <Space h="lg" />
      <Grid>
        <Grid.Col md={12} lg={6}>
          <div className="faq">
            <img className="faq-image" src={pic} alt="" />
            <h1>
              Answers to frequently asked <br />
              <span className="purple">questions</span>
            </h1>
            <img
              src="https://learnwithsumit.com/_next/static/media/underline.933c12d8.svg"
              alt=""
              className="faq-image-2"
            />
            <p>
              We have listed here the answers to some of your common questions.
              We request you to read this time.We have listed here the answers to some of your common questions. We request you to read this list once before asking questions. Then you don't have to wait for our reply and save your precious time.
            </p>
            <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Explore more</Button>

          </div>
        </Grid.Col>
        <Grid.Col md={12} lg={6}>
          <Accordion defaultValue="customization">

            <Accordion.Item value="customization">
              <Accordion.Control className="faq-hover-bg">What do you need to know in advance to do the course?</Accordion.Control>
              <Accordion.Panel>
                Colors, fonts, shadows and many other parts are customizable to
                fit your design needs
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="flexibility">
              <Accordion.Control className="faq-hover-bg">Flexibility In Additional Way</Accordion.Control>
              <Accordion.Panel>
                Configure components appearance and behavior with vast amount of
                settings or overwrite any part of component styles
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="focus-ring">
              <Accordion.Control className="faq-hover-bg">No annoying focus ring</Accordion.Control>
              <Accordion.Panel>
                With new :focus-visible pseudo-class focus ring appears only
                when user navigates with keyboard
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="focus-1">
              <Accordion.Control className="faq-hover-bg">What do you need to do the course?</Accordion.Control>
              <Accordion.Panel> Now 
                With new :focus-visible pseudo-class focus ring appears only
                when user navigates with keyboard
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="focus-2">
              <Accordion.Control className="faq-hover-bg">How long will the course last?</Accordion.Control>
              <Accordion.Panel> Now 
                With new :focus-visible pseudo-class focus ring appears only
                when user navigates with keyboard
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="focus-3">
              <Accordion.Control className="faq-hover-bg">How will the course videos be given?</Accordion.Control>
              <Accordion.Panel> Now 
                With new :focus-visible pseudo-class focus ring appears only
                when user navigates with keyboard
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="focus-4">
              <Accordion.Control className="faq-hover-bg">Does the course fee have to be paid in full before the course?</Accordion.Control>
              <Accordion.Panel> Now 
                With new :focus-visible pseudo-class focus ring appears only
                when user navigates with keyboard
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="focus-5">
              <Accordion.Control className="faq-hover-bg">What to do if you get stuck while doing the course?</Accordion.Control>
              <Accordion.Panel> Now 
                With new :focus-visible pseudo-class focus ring appears only
                when user navigates with keyboard
              </Accordion.Panel>
            </Accordion.Item>





          </Accordion>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Accordions;




