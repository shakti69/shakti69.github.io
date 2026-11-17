import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import styles from './all-projects.module.css';

const projectsList = [
  {
    id: 'primenet-broadband',
    title: 'Primenet Broadband',
    category: 'Broadband SaaS & Fiber',
    status: 'Production',
    description:
      'High-performance SaaS platform for broadband internet management, high-speed fiber services, billing automation, and self-service customer portal solutions.',
    tags: ['Next.js', 'React', 'SaaS', 'Billing API', 'Fiber ISP'],
    primaryAction: {
      label: 'Visit Website',
      href: 'https://www.primenet.strikzesports.in/',
      icon: 'arrow-right',
    },
  },
  {
    id: 'darkmusic',
    title: 'DarkMusic',
    category: 'Audiophile Music Player',
    status: 'v1.5.26',
    description:
      'Hyper-optimized music player for Android & Windows delivering 120 FPS Jetpack Compose UI, synchronized bilingual lyrics, bit-perfect gapless audio, and cloud streaming.',
    tags: ['Jetpack Compose', 'Kotlin', 'Wails v3', 'Go', '120 FPS'],
    primaryAction: {
      label: 'Download APK',
      href: 'https://github.com/shakti69/DarkMusic/raw/main/DarkMusic.apk',
      icon: 'arrow-right',
    },
    secondaryAction: {
      label: 'GitHub',
      href: 'https://github.com/shakti69/DarkMusic',
      icon: 'github',
    },
  },
  {
    id: 'darkedge-ai',
    title: 'DarkEdge AI',
    category: 'On-Device Local AI',
    status: 'v1.20.9',
    description:
      'Offline, privacy-focused AI assistant designed to run AI models directly on-device for document processing, intelligent writing, code assistance, and optical character recognition (OCR).',
    tags: ['Android', 'Kotlin', 'Local LLM', 'On-Device AI', 'OCR'],
    primaryAction: {
      label: 'Download APK',
      href: 'https://github.com/shakti69/DarkEdgeAi/releases/download/v1.20.9/DarkEdge.AI.v1.20.9.apk',
      icon: 'arrow-right',
    },
    secondaryAction: {
      label: 'GitHub',
      href: 'https://github.com/shakti69/DarkEdgeAi',
      icon: 'github',
    },
  },
  {
    id: 'strikz-esports',
    title: 'Strikz Esports',
    category: 'Competitive Gaming Platform',
    status: 'Live Platform',
    description:
      'Modern esports ecosystem designed for competitive gaming, featuring automated tournament bracket management, player telemetry, and match tracking.',
    tags: ['React', 'Node.js', 'Tournament Engine', 'Esports', 'Web App'],
    primaryAction: {
      label: 'Visit Website',
      href: 'https://strikzesports.in',
      icon: 'arrow-right',
    },
  },
  {
    id: 'primedev',
    title: 'PrimeDev',
    category: 'Developer Tools & Infra',
    status: 'Open Source',
    description:
      'Full-stack developer utility library and serverless infrastructure toolkit tailored for scalable web deployments and automated continuous integration.',
    tags: ['TypeScript', 'Full Stack', 'DevOps', 'APIs'],
    primaryAction: {
      label: 'View GitHub',
      href: 'https://github.com/shakti69/PrimeDev',
      icon: 'github',
    },
  },
  {
    id: 'dac-cs-portal',
    title: 'Computer Science DAC Portal',
    category: 'Academic Department Portal',
    status: 'Academic Hub',
    description:
      'Official student and academic portal for the Computer Science Department at Dhenkanal Autonomous College, offering semester resources, announcements, and study material.',
    tags: ['Web Portal', 'GitHub Pages', 'Education', 'Frontend'],
    primaryAction: {
      label: 'View Project',
      href: 'https://github.com/shakti69/computersciencedac.github.io',
      icon: 'github',
    },
  },
];

export function AllProjects({ id, visible, sectionRef }) {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.allProjects}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible: isVisible, nodeRef }) => (
          <div className={styles.container} ref={nodeRef}>
            <header className={styles.header}>
              <div className={styles.tagWrapper}>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!isVisible}
                  collapseDelay={500}
                />
                <span className={styles.tag} data-visible={isVisible}>
                  Portfolio Directory
                </span>
              </div>
              <Heading
                level={2}
                as="h2"
                className={styles.title}
                data-visible={isVisible}
                id={titleId}
              >
                <DecoderText text="All Projects & Platforms" start={isVisible} delay={300} />
              </Heading>
              <Text className={styles.subtitle} data-visible={isVisible} size="l" as="p">
                A complete directory of all my software developments, mobile apps, SaaS systems,
                and open-source releases.
              </Text>
            </header>

            <div className={styles.grid}>
              {projectsList.map((project, index) => (
                <article
                  key={project.id}
                  className={styles.card}
                  data-visible={isVisible}
                  style={{ '--delay': `${index * 90 + 150}ms` }}
                >
                  <div className={styles.topRow}>
                    <span className={styles.category}>{project.category}</span>
                    <span className={styles.status}>{project.status}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDescription}>{project.description}</p>

                  <div className={styles.tags}>
                    {project.tags.map(tag => (
                      <span key={tag} className={styles.tagBadge}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className={styles.actions}>
                    <Button
                      href={project.primaryAction.href}
                      iconHoverShift
                      iconEnd={project.primaryAction.icon}
                      className={styles.primaryBtn}
                    >
                      {project.primaryAction.label}
                    </Button>
                    {project.secondaryAction && (
                      <Button
                        secondary
                        href={project.secondaryAction.href}
                        iconHoverShift
                        icon={project.secondaryAction.icon}
                        className={styles.secondaryBtn}
                      >
                        {project.secondaryAction.label}
                      </Button>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
}
