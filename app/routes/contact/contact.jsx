import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Input } from '~/components/input';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useFormInput } from '~/hooks';
import { useRef } from 'react';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import { Form, useActionData, useNavigation } from '@remix-run/react';
import { json } from '@remix-run/cloudflare';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import styles from './contact.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description:
      'Send me a message if you’re interested in discussing a project or if you just want to say hi',
  });
};

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;

export async function action({ context, request }) {
  const env = context.cloudflare?.env || context.env || {};

  const formData = await request.formData();
  const isBot = String(formData.get('name'));
  const email = String(formData.get('email'));
  const message = String(formData.get('message'));
  const errors = {};

  // Return without sending if a bot trips the honeypot
  if (isBot) return json({ success: true });

  // Handle input validation on the server
  if (!email || !EMAIL_PATTERN.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!message) {
    errors.message = 'Please enter a message.';
  }

  if (email.length > MAX_EMAIL_LENGTH) {
    errors.email = `Email address must be shorter than ${MAX_EMAIL_LENGTH} characters.`;
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Message must be shorter than ${MAX_MESSAGE_LENGTH} characters.`;
  }

  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }

  // Send email via Amazon SES if configured
  if (env.AWS_ACCESS_KEY_ID && env.AWS_SECRET_ACCESS_KEY && env.EMAIL) {
    const ses = new SESClient({
      region: 'us-east-1',
      credentials: {
        accessKeyId: env.AWS_ACCESS_KEY_ID,
        secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
      },
    });

    await ses.send(
      new SendEmailCommand({
        Destination: {
          ToAddresses: [env.EMAIL],
        },
        Message: {
          Body: {
            Text: {
              Data: `From: ${email}\n\n${message}`,
            },
          },
          Subject: {
            Data: `Portfolio message from ${email}`,
          },
        },
        Source: `Portfolio <${env.FROM_EMAIL || env.EMAIL}>`,
        ReplyToAddresses: [email],
      })
    );
  }

  return json({ success: true });
}

export const Contact = () => {
  const errorRef = useRef();
  const email = useFormInput('');
  const message = useFormInput('');
  const initDelay = tokens.base.durationS;
  const actionData = useActionData();
  const { state } = useNavigation();
  const sending = state === 'submitting';

  return (
    <Section className={styles.contact}>
      <Transition unmount in={!actionData?.success} timeout={1600}>
        {({ status, nodeRef }) => (
          <div className={styles.container} ref={nodeRef}>
            <div className={styles.infoPanel} data-status={status} style={getDelay(tokens.base.durationXS, initDelay, 0.2)}>
              <Heading className={styles.title} level={2} as="h1">
                <DecoderText text="Get in touch" start={status !== 'exited'} delay={300} />
              </Heading>
              <Text className={styles.subtitle} size="l" as="p">
                Whether you want to build a full-stack web app, discuss local AI models, explore cybersecurity, or collaborate on e-sports & content creation — feel free to send a message or email directly!
              </Text>

              <div className={styles.statusBadge}>
                <span className={styles.statusPulse} />
                <span>Open for Projects & Collaborations</span>
              </div>

              <div className={styles.directEmailBox}>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=shaktiprasadhota07@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.gmailComposeBtn}
                >
                  <Icon icon="send" className={styles.gmailIcon} />
                  <span>Compose in Gmail</span>
                </a>
              </div>

              <div className={styles.detailsList}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Direct Email</span>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=shaktiprasadhota07@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.detailLink}
                    title="Click to open in Gmail"
                  >
                    shaktiprasadhota07@gmail.com
                  </a>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Location</span>
                  <span className={styles.detailValue}>Dhenkanal, Odisha, India</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>GitHub</span>
                  <a href="https://github.com/shakti69" target="_blank" rel="noopener noreferrer" className={styles.detailLink}>github.com/shakti69</a>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Instagram</span>
                  <a href="https://www.instagram.com/shakti_gamer69" target="_blank" rel="noopener noreferrer" className={styles.detailLink}>@shakti_gamer69</a>
                </div>
              </div>
            </div>

            <Form
              unstable_viewTransition
              className={styles.form}
              method="post"
            >
              {/* Hidden honeypot field to identify bots */}
              <Input
                className={styles.botkiller}
                label="Name"
                name="name"
                maxLength={MAX_EMAIL_LENGTH}
              />
              <Input
                required
                className={styles.input}
                data-status={status}
                style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
                autoComplete="email"
                label="Your Email"
                type="email"
                name="email"
                maxLength={MAX_EMAIL_LENGTH}
                {...email}
              />
              <Input
                required
                multiline
                className={styles.input}
                data-status={status}
                style={getDelay(tokens.base.durationS, initDelay, 0.6)}
                autoComplete="off"
                label="Your Message"
                name="message"
                maxLength={MAX_MESSAGE_LENGTH}
                {...message}
              />
              <Transition
                unmount
                in={!sending && actionData?.errors}
                timeout={msToNum(tokens.base.durationM)}
              >
                {({ status: errorStatus, nodeRef }) => (
                  <div
                    className={styles.formError}
                    ref={nodeRef}
                    data-status={errorStatus}
                    style={cssProps({
                      height: errorStatus ? errorRef.current?.offsetHeight : 0,
                    })}
                  >
                    <div className={styles.formErrorContent} ref={errorRef}>
                      <div className={styles.formErrorMessage}>
                        <Icon className={styles.formErrorIcon} icon="error" />
                        {actionData?.errors?.email}
                        {actionData?.errors?.message}
                      </div>
                    </div>
                  </div>
                )}
              </Transition>
              <Button
                className={styles.button}
                data-status={status}
                data-sending={sending}
                style={getDelay(tokens.base.durationM, initDelay, 0.8)}
                disabled={sending}
                loading={sending}
                loadingText="Sending Message..."
                icon="send"
                type="submit"
              >
                Send Message
              </Button>
            </Form>
          </div>
        )}
      </Transition>
      <Transition unmount in={actionData?.success}>
        {({ status, nodeRef }) => (
          <div className={styles.complete} aria-live="polite" ref={nodeRef}>
            <Heading
              level={3}
              as="h3"
              className={styles.completeTitle}
              data-status={status}
            >
              Message Sent!
            </Heading>
            <Text
              size="l"
              as="p"
              className={styles.completeText}
              data-status={status}
              style={getDelay(tokens.base.durationXS)}
            >
              Thank you for reaching out. I’ll get back to you as soon as possible!
            </Text>
            <Button
              secondary
              iconHoverShift
              className={styles.completeButton}
              data-status={status}
              style={getDelay(tokens.base.durationM)}
              href="/"
              icon="chevron-right"
            >
              Back to Homepage
            </Button>
          </div>
        )}
      </Transition>
      <Footer className={styles.footer} />
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
