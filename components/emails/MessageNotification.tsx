// components/emails/MessageNotification.tsx
import { Html, Head, Preview, Body, Container, Heading, Text } from '@react-email/components';

export const MessageNotification = ({ senderName, assignmentTitle, message }:{senderName:string,assignmentTitle:string,message:string} ) => {
  return (
    <Html>
      <Head />
      <Preview>New Message Notification</Preview>
      <Body style={{ backgroundColor: '#f9f9f9', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
        <Container style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px' }}>
          <Heading style={{ color: '#333333', fontSize: '20px' }}>New Message</Heading>
          <Text>
            Hello,
            <br />
            <br />
            You have received a new message from <strong>{senderName}</strong> regarding <em>{assignmentTitle}</em>.
          </Text>
          <Text style={{ fontStyle: 'italic', margin: '20px 0', padding: '10px', backgroundColor: '#f3f3f3' }}>
          &quot;{message}&quot;
          </Text>
          <Text>Best regards,</Text>
          <Text>Your App Team</Text>
        </Container>
      </Body>
    </Html>
  );
};
