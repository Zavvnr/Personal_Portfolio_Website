import javax.mail.*;
import javax.mail.internet.*;
import java.util.Properties;

public class SendHtmlEmail {

    public static void main(String[] args) throws MessagingException {
        String to = "rahmansyah@wisc.edu";
        String from = "sender@example.com";
        String host = "smtp.example.com"; // Your SMTP host

        Properties properties = System.getProperties();
        properties.setProperty("mail.smtp.host", host);
        // Add other SMTP properties as needed (authentication, SSL/TLS, etc.)

        Session session = Session.getDefaultInstance(properties);

        try {
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(from));
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
            message.setSubject("HTML Email Example");

            String htmlContent = "<h1>Hello!</h1><p>This is an <b>HTML</b> email.</p>";
            message.setContent(htmlContent, "text/html; charset=utf-8");

            Transport.send(message);
            System.out.println("HTML email sent successfully.");

        } catch (MessagingException mex) {
            mex.printStackTrace();
        }
    }
}