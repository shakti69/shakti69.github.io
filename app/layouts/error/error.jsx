import notFoundPoster from '~/assets/notfound.jpg';
import notFoundVideo from '~/assets/notfound.mp4';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import styles from './error.module.css';
import { Image } from '~/components/image';

export function Error({ error = {} }) {
  const is404 = error.status === 404;

  const getMessage = () => {
    if (is404) {
      return {
        summary: 'Page not found',
        message:
          'This page could not be found. It may have been moved or does not exist.',
      };
    }
    return {
      summary: 'An error occurred',
      message: error.statusText || error.data || error.message || 'Something went wrong while loading this page.',
    };
  };

  const { summary, message } = getMessage();

  return (
    <section className={styles.page}>
      <Transition in>
        {({ visible }) => (
          <>
            <div className={styles.details}>
              <div className={styles.text}>
                <Heading
                  className={styles.title}
                  data-visible={visible}
                  level={0}
                  weight="bold"
                >
                  {error.status || '500'}
                </Heading>
                <Heading
                  aria-hidden
                  className={styles.subheading}
                  data-visible={visible}
                  as="h2"
                  level={4}
                >
                  <DecoderText text={summary} start={visible} delay={300} />
                </Heading>
                <Text className={styles.description} data-visible={visible} as="p">
                  {message}
                </Text>
                <Button
                  secondary
                  iconHoverShift
                  className={styles.button}
                  data-visible={visible}
                  href="/"
                  icon="chevron-right"
                >
                  Back to homepage
                </Button>
              </div>
            </div>

            <div className={styles.videoContainer} data-visible={visible}>
              <Image
                reveal
                cover
                noPauseButton
                delay={600}
                className={styles.video}
                src={notFoundVideo}
                placeholder={notFoundPoster}
              />
              <a
                className={styles.credit}
                data-visible={visible}
                href="https://www.imdb.com/title/tt0113568/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Animation from Ghost in the Shell (1995)
              </a>
            </div>
          </>
        )}
      </Transition>
    </section>
  );
}
