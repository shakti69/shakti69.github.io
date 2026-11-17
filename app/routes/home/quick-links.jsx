import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import styles from './quick-links.module.css';

const quickLinkItems = [
  {
    id: 'darkmusic',
    title: 'DarkMusic',
    badge: 'v1.5.26 • Android & Windows',
    category: 'Music Player',
    description:
      'Audiophile-grade offline & cloud music player with 120 FPS Jetpack Compose UI, synchronized lyrics, and gapless audio.',
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
    accent: 'rgb(225, 29, 72)',
  },
  {
    id: 'darkedge',
    title: 'DarkEdge AI',
    badge: 'v1.20.9 • Android & Local LLM',
    category: 'Local AI Assistant',
    description:
      'Offline, privacy-focused AI assistant engineered to run local LLMs on-device for document analysis, writing, and OCR.',
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
    accent: 'rgb(14, 165, 233)',
  },
  {
    id: 'primenet',
    title: 'Primenet Broadband',
    badge: 'Live SaaS • High-Speed Fiber',
    category: 'ISP Infrastructure',
    description:
      'High-performance broadband management platform for fiber optic subscriptions, automated billing, and customer portal.',
    primaryAction: {
      label: 'Open Website',
      href: 'https://www.primenet.strikzesports.in/',
      icon: 'arrow-right',
    },
    accent: 'rgb(139, 92, 246)',
  },
  {
    id: 'strikz',
    title: 'Strikz Esports',
    badge: 'Live Platform • Competitive',
    category: 'Esports Platform',
    description:
      'Modern esports platform built for competitive tournaments, match bracket scheduling, and live player telemetry.',
    primaryAction: {
      label: 'Open Website',
      href: 'https://strikzesports.in',
      icon: 'arrow-right',
    },
    accent: 'rgb(234, 88, 12)',
  },
];

export function QuickLinks({ id, visible, sectionRef }) {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.quickLinks}
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
                  Direct Access
                </span>
              </div>
              <Heading
                level={2}
                as="h2"
                className={styles.title}
                data-visible={isVisible}
                id={titleId}
              >
                <DecoderText text="Quick Links & Downloads" start={isVisible} delay={300} />
              </Heading>
              <Text className={styles.subtitle} data-visible={isVisible} size="l" as="p">
                Instantly download production builds or launch live web applications.
              </Text>
            </header>

            <div className={styles.grid}>
              {quickLinkItems.map((item, index) => (
                <article
                  key={item.id}
                  className={styles.card}
                  data-visible={isVisible}
                  style={{ '--delay': `${index * 120 + 200}ms` }}
                >
                  <div className={styles.cardHeader}>
                    <span className={styles.badge} style={{ borderColor: item.accent }}>
                      {item.badge}
                    </span>
                    <span className={styles.category}>{item.category}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{item.title}</h3>
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
