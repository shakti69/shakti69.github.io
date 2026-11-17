import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { baseMeta } from '~/utils/meta';
import config from '~/config.json';
import styles from './quick-links.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Quick Links & Downloads',
    description: `Quick downloads and direct links to Android APKs, Windows software, and web applications built by ${config.name}.`,
  });
};

const quickLinksList = [
  {
    id: 'darkmusic',
    title: 'DarkMusic',
    version: 'v1.5.26 (Latest)',
    platform: 'Android APK & Windows',
    category: 'Music Player',
    accent: 'rgb(225, 29, 72)',
    description:
      'Audiophile-grade 120 FPS music player engineered with Jetpack Compose, syllable-synchronized lyrics, bit-perfect 32-bit float audio, and cloud streaming.',
    primaryAction: {
      label: 'Download APK (v1.5.26)',
      href: 'https://github.com/shakti69/DarkMusic/raw/main/DarkMusic.apk',
      icon: 'arrow-right',
    },
    secondaryAction: {
      label: 'GitHub Repo',
      href: 'https://github.com/shakti69/DarkMusic',
      icon: 'github',
    },
    tertiaryAction: {
      label: 'Windows Setup Installer',
      href: 'https://github.com/shakti69/DarkMusic/releases/tag/v1.5.26',
      icon: 'arrow-right',
    },
  },
  {
    id: 'darkedge-ai',
    title: 'DarkEdge AI',
    version: 'v1.20.9 (Latest)',
    platform: 'Android APK (Offline)',
    category: 'Local On-Device AI',
    accent: 'rgb(14, 165, 233)',
    description:
      'Offline, privacy-focused AI assistant that runs quantized language models directly on your Android device for private document analysis, coding help, and camera OCR.',
    primaryAction: {
      label: 'Download APK (v1.20.9)',
      href: 'https://github.com/shakti69/DarkEdgeAi/releases/download/v1.20.9/DarkEdge.AI.v1.20.9.apk',
      icon: 'arrow-right',
    },
    secondaryAction: {
      label: 'GitHub Repo',
      href: 'https://github.com/shakti69/DarkEdgeAi',
      icon: 'github',
    },
  },
  {
    id: 'primenet',
    title: 'Primenet Broadband',
    version: 'Live Platform',
    platform: 'Web SaaS & Fiber Portal',
    category: 'ISP Infrastructure',
    accent: 'rgb(139, 92, 246)',
    description:
      'High-performance cloud SaaS platform for high-speed fiber internet subscription provisioning, automated billing cycles, and customer self-service solutions.',
    primaryAction: {
      label: 'Launch Primenet Website',
      href: 'https://www.primenet.strikzesports.in/',
      icon: 'arrow-right',
    },
  },
  {
    id: 'strikz',
    title: 'Strikz Esports',
    version: 'Live Platform',
    platform: 'Web & Mobile Web',
    category: 'Competitive Gaming',
    accent: 'rgb(234, 88, 12)',
    description:
      'Professional esports tournament management ecosystem featuring automated match bracket builders, live score tracking, and player telemetry statistics.',
    primaryAction: {
      label: 'Visit Strikz Esports',
      href: 'https://strikzesports.in',
      icon: 'arrow-right',
    },
  },
  {
    id: 'primedev',
    title: 'PrimeDev',
    version: 'Open Source',
    platform: 'Developer Tools',
    category: 'Infrastructure & CI/CD',
    accent: 'rgb(16, 185, 129)',
    description:
      'Modular full-stack utility toolkit and continuous deployment workflow suite designed for modern web applications, API mocking, and serverless deployments.',
    primaryAction: {
      label: 'View on GitHub',
      href: 'https://github.com/shakti69/PrimeDev',
      icon: 'github',
    },
  },
  {
    id: 'dac-portal',
    title: 'Computer Science DAC Portal',
    version: 'Active Portal',
    platform: 'Academic Web Platform',
    category: 'College Portal',
    accent: 'rgb(59, 130, 246)',
    description:
      'Official student and academic portal for the Computer Science Department at Dhenkanal Autonomous College, offering semester syllabus downloads and notices.',
    primaryAction: {
      label: 'View Portal on GitHub',
      href: 'https://github.com/shakti69/computersciencedac.github.io',
      icon: 'github',
    },
  },
];

export function QuickLinks() {
  return (
    <div className={styles.quickLinksPage}>
      <Section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.tagWrapper}>
            <Divider notchWidth="64px" notchHeight="8px" />
            <span className={styles.tag}>Direct Access</span>
          </div>
          <Heading level={1} as="h1" className={styles.pageTitle}>
            <DecoderText text="Quick Links & Downloads" start delay={300} />
          </Heading>
          <Text className={styles.pageSubtitle} size="l" as="p">
            Instant 1-click access to production software packages, Android APK binaries, Windows installers, live web platforms, and source code repositories.
          </Text>
        </div>
      </Section>

      <Section className={styles.gridSection}>
        <div className={styles.grid}>
          {quickLinksList.map(item => (
            <article key={item.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.badge} style={{ borderColor: item.accent }}>
                  {item.version}
                </span>
                <span className={styles.platform}>{item.platform}</span>
              </div>

              <h2 className={styles.cardTitle}>{item.title}</h2>
              <span className={styles.category}>{item.category}</span>
              <p className={styles.cardDescription}>{item.description}</p>

              <div className={styles.actions}>
                <Button
                  href={item.primaryAction.href}
                  iconHoverShift
                  iconEnd={item.primaryAction.icon}
                  className={styles.primaryBtn}
                >
                  {item.primaryAction.label}
                </Button>
                {item.secondaryAction && (
                  <Button
                    secondary
                    href={item.secondaryAction.href}
                    iconHoverShift
                    icon={item.secondaryAction.icon}
                    className={styles.secondaryBtn}
                  >
                    {item.secondaryAction.label}
                  </Button>
                )}
                {item.tertiaryAction && (
                  <Button
                    secondary
                    href={item.tertiaryAction.href}
                    iconHoverShift
                    iconEnd={item.tertiaryAction.icon}
                    className={styles.secondaryBtn}
                  >
                    {item.tertiaryAction.label}
                  </Button>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
}
