import darkmusicTexture1 from '~/assets/darkmusic-mobile-1.webp';
import darkmusicTexture2 from '~/assets/darkmusic-mobile-2.webp';
import darkmusicIcon from '~/assets/darkmusic-icon.png';
import gamestackLogin from '~/assets/gamestack-login.jpg';
import gamestackList from '~/assets/gamestack-list.jpg';
import primenetLaptop from '~/assets/primenet-laptop.png';
import primenetPhone from '~/assets/primenet-phone.png';
import strikzLaptop from '~/assets/spr-lesson-builder-dark.jpg';
import strikzPhone from '~/assets/strikz-phone.png';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { baseMeta } from '~/utils/meta';
import { useState } from 'react';
import config from '~/config.json';
import styles from './projects.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Projects & Platforms',
    description: `Complete portfolio of ${config.name} — mobile applications, local AI systems, SaaS broadband infrastructure, and competitive esports platforms.`,
  });
};

const quickDownloads = [
  {
    id: 'dl-darkmusic',
    title: 'DarkMusic',
    version: 'v1.5.26 (Latest)',
    platform: 'Android APK & Windows',
    description: 'Audiophile music player with 120 FPS UI, synced lyrics, and gapless audio.',
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
    id: 'dl-darkedge',
    title: 'DarkEdge AI',
    version: 'v1.20.9 (Latest)',
    platform: 'Android APK (Offline)',
    description: 'On-device offline AI assistant for document processing, OCR, and coding.',
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
    id: 'dl-primenet',
    title: 'Primenet Broadband',
    version: 'Production SaaS',
    platform: 'Web Application',
    description: 'High-speed fiber internet subscription, automated billing, and portal.',
    primaryAction: {
      label: 'Open Website',
      href: 'https://www.primenet.strikzesports.in/',
      icon: 'arrow-right',
    },
    accent: 'rgb(139, 92, 246)',
  },
  {
    id: 'dl-strikz',
    title: 'Strikz Esports',
    version: 'Live Platform',
    platform: 'Web & Mobile Web',
    description: 'Competitive gaming ecosystem with tournament management & live player stats.',
    primaryAction: {
      label: 'Open Website',
      href: 'https://strikzesports.in',
      icon: 'arrow-right',
    },
    accent: 'rgb(234, 88, 12)',
  },
];

const detailedProjects = [
  {
    id: 'darkmusic',
    index: '01',
    title: 'DarkMusic',
    subtitle: 'Audiophile-Grade 120 FPS Music Player for Android & Windows',
    category: 'Mobile Application',
    status: 'v1.5.26 Stable',
    accent: 'rgb(225, 29, 72)',
    description:
      'DarkMusic is an ultra-responsive offline & cloud music streaming player engineered for listeners who demand pristine audio quality, zero-latency navigation, and clean aesthetics. Designed with a native Jetpack Compose UI on Android and hardware-accelerated Wails v3 + Go on Windows, it achieves true 120 FPS fluid scrolling, syllable-synchronized bilingual lyrics, gapless playback, and Last.fm integration.',
    features: [
      '120 FPS Zero-Allocation Scroll Pipeline with virtualized memory management',
      'Bit-Perfect 32-bit floating-point audio engine (AAudio + miniaudio)',
      'Real-time Syllable-Level Synchronized Lyrics (LRCLIB & Cloud APIs)',
      'True gapless playback and configurable 1-12s equal-power crossfade',
      'Apple Music SF Pro typography with authentic Liquid Glass frosted navigation',
      'Full Windows 10/11 x64 client with system media controls and global hotkeys',
    ],
    tags: ['Jetpack Compose', 'Kotlin', 'Android SDK', 'Wails v3', 'Go', 'AAudio', 'SQLite', '120 Hz'],
    images: [
      {
        src: darkmusicTexture1,
        alt: 'DarkMusic home dashboard with personalized mixes and recent tracks',
        caption: 'Home Dashboard & 120 FPS Typography',
      },
      {
        src: darkmusicTexture2,
        alt: 'DarkMusic now playing player with synced lyrics and dynamic theme',
        caption: 'Now Playing & Synced Lyrics',
      },
    ],
    primaryAction: {
      label: 'Download APK (v1.5.26)',
      href: 'https://github.com/shakti69/DarkMusic/raw/main/DarkMusic.apk',
      icon: 'arrow-right',
    },
    secondaryAction: {
      label: 'View GitHub Repository',
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
    index: '02',
    title: 'DarkEdge AI',
    subtitle: 'Offline, Privacy-Focused On-Device AI Assistant',
    category: 'Artificial Intelligence & Mobile',
    status: 'v1.20.9 Stable',
    accent: 'rgb(14, 165, 233)',
    description:
      'DarkEdge AI is a cutting-edge on-device AI assistant engineered to run local language models directly on your hardware without transmitting data to external cloud servers. Designed with an emphasis on data privacy, offline autonomy, and low latency, it provides full-fledged document intelligence, code analysis, creative drafting, and high-accuracy optical character recognition (OCR).',
    features: [
      '100% On-Device Processing — Zero telemetry, air-gapped security, zero data leaks',
      'Integrated Local LLM engine capable of running quantized open-weights offline',
      'Optical Character Recognition (OCR) directly from device camera and saved media',
      'Multi-format document parsing and automated intelligent summarization',
      'Code generation, syntax refactoring, and logic debugging assistant',
      'Persistent encrypted SQLite conversation memory and custom system prompts',
    ],
    tags: ['Android', 'Kotlin', 'Local LLM', 'On-Device AI', 'Tesseract OCR', 'Room DB', 'Privacy'],
    images: [
      {
        src: gamestackLogin,
        alt: 'DarkEdge AI chat session and document ingestion interface',
        caption: 'On-Device Assistant & Local Reasoning',
      },
      {
        src: gamestackList,
        alt: 'DarkEdge AI OCR document scanner and intelligence library',
        caption: 'Document Scanner & OCR Pipeline',
      },
    ],
    primaryAction: {
      label: 'Download APK (v1.20.9)',
      href: 'https://github.com/shakti69/DarkEdgeAi/releases/download/v1.20.9/DarkEdge.AI.v1.20.9.apk',
      icon: 'arrow-right',
    },
    secondaryAction: {
      label: 'View GitHub Repository',
      href: 'https://github.com/shakti69/DarkEdgeAi',
      icon: 'github',
    },
  },
  {
    id: 'primenet-broadband',
    index: '03',
    title: 'Primenet Broadband',
    subtitle: 'High-Performance Fiber ISP Management & Customer SaaS',
    category: 'SaaS Platform & Infrastructure',
    status: 'Production Live',
    accent: 'rgb(139, 92, 246)',
    description:
      'Primenet Broadband is an enterprise-grade cloud SaaS platform engineered for broadband service providers and high-speed fiber internet subscribers. It delivers end-to-end plan provisioning, automated billing cycles, payment gateway integration, real-time bandwidth monitoring, and a dedicated self-service customer portal.',
    features: [
      'Self-service customer portal for account management, plan upgrades, and invoice downloads',
      'Automated recurring subscription billing and digital payment processing',
      'Real-time fiber bandwidth consumption diagnostics and telemetry metrics',
      'Automated support ticketing with status tracking and technician dispatch',
      'Multi-role administrative console for subscriber provisioning and network routing',
      'High-uptime cloud architecture deployed on modern serverless edge infrastructure',
    ],
    tags: ['Next.js', 'React', 'Node.js', 'Billing Engine', 'REST APIs', 'Cloudflare', 'SaaS'],
    images: [
      {
        src: primenetLaptop,
        alt: 'Primenet Broadband ISP administrative dashboard on desktop',
        caption: 'Desktop Admin Console & Billing Telemetry',
      },
      {
        src: primenetPhone,
        alt: 'Primenet customer self-service mobile app portal',
        caption: 'Mobile Customer Portal & Plan Manager',
      },
    ],
    primaryAction: {
      label: 'Launch Primenet Website',
      href: 'https://www.primenet.strikzesports.in/',
      icon: 'arrow-right',
    },
  },
  {
    id: 'strikz-esports',
    index: '04',
    title: 'Strikz Esports',
    subtitle: 'Competitive Gaming Platform & Match Telemetry Engine',
    category: 'Gaming Platform & Web',
    status: 'Production Live',
    accent: 'rgb(234, 88, 12)',
    description:
      'Strikz Esports is a dedicated platform designed for the competitive gaming community, esports athletes, and tournament organizers. It automates single and double elimination match brackets, registers team rosters, computes live leaderboard standings, and delivers real-time match telemetry for casters and fans.',
    features: [
      'Automated tournament bracket builder supporting single, double elimination, and round-robin',
      'Live match scoreboards and player stat leaderboards updated in real time',
      'Player identity management, team roster verification, and tournament registration',
      'Caster broadcast overlays and dedicated tournament schedule feeds',
      'Mobile-responsive layout optimized for fast low-latency viewing during live matches',
    ],
    tags: ['React', 'Remix', 'Node.js', 'WebSockets', 'Esports', 'Tournament Engine', 'Tailwind'],
    images: [
      {
        src: strikzLaptop,
        alt: 'Strikz Esports tournament bracket and match schedule dashboard',
        caption: 'Tournament Management Dashboard',
      },
      {
        src: strikzPhone,
        alt: 'Strikz Esports mobile player standings and roster view',
        caption: 'Mobile Bracket & Player Telemetry',
      },
    ],
    primaryAction: {
      label: 'Visit Strikz Esports',
      href: 'https://strikzesports.in',
      icon: 'arrow-right',
    },
  },
  {
    id: 'primedev',
    index: '05',
    title: 'PrimeDev',
    subtitle: 'Full-Stack Developer Utility Library & Cloud Automation',
    category: 'Developer Tools & Infra',
    status: 'Open Source',
    accent: 'rgb(16, 185, 129)',
    description:
      'A modular full-stack utility toolkit and continuous deployment workflow suite designed to speed up modern web development, API testing, and automated serverless container rollouts.',
    features: [
      'Reusable TypeScript core modules for networking, security headers, and data validation',
      'Zero-dependency API response helpers and error boundary handlers',
      'Pre-configured CI/CD workflows for automated builds and testing',
    ],
    tags: ['TypeScript', 'Node.js', 'Docker', 'CI/CD', 'Open Source'],
    images: [],
    primaryAction: {
      label: 'View on GitHub',
      href: 'https://github.com/shakti69/PrimeDev',
      icon: 'github',
    },
  },
  {
    id: 'dac-portal',
    index: '06',
    title: 'Computer Science DAC Portal',
    subtitle: 'Departmental Academic & Student Resource Portal',
    category: 'Academic Web Platform',
    status: 'Active Portal',
    accent: 'rgb(59, 130, 246)',
    description:
      'Official academic portal created for the Computer Science Department at Dhenkanal Autonomous College, providing students with instant access to syllabus repositories, semester study material, and official announcements.',
    features: [
      'Curated semester syllabus archives and download center',
      'Notice board for departmental events, workshops, and exam alerts',
      'Fast, mobile-optimized static architecture hosted on GitHub Pages',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages', 'Education'],
    images: [],
    primaryAction: {
      label: 'View on GitHub',
      href: 'https://github.com/shakti69/computersciencedac.github.io',
      icon: 'github',
    },
  },
];

export function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = detailedProjects.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'mobile') return item.tags.includes('Android') || item.tags.includes('Jetpack Compose');
    if (filter === 'web') return item.tags.includes('Next.js') || item.tags.includes('React') || item.tags.includes('SaaS');
    if (filter === 'ai') return item.tags.includes('Local LLM') || item.tags.includes('On-Device AI');
    return true;
  });

  return (
    <div className={styles.projectsPage}>
      <Section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.tagWrapper}>
            <Divider notchWidth="64px" notchHeight="8px" />
            <span className={styles.tag}>Portfolio Showcase</span>
          </div>
          <Heading level={1} as="h1" className={styles.pageTitle}>
            <DecoderText text="Projects & Platforms" start delay={300} />
          </Heading>
          <Text className={styles.pageSubtitle} size="l" as="p">
            A comprehensive catalog of all my software developments, mobile apps, SaaS systems,
            and open-source releases with direct downloads, live links, and technical details.
          </Text>
        </div>
      </Section>

      {/* QUICK LINKS & DOWNLOADS ANCHOR SECTION */}
      <Section id="quick-links" className={styles.quickLinksSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.tagWrapper}>
            <Divider notchWidth="48px" notchHeight="6px" />
            <span className={styles.tag}>Fast Track</span>
          </div>
          <Heading level={2} as="h2" className={styles.sectionTitle}>
            <DecoderText text="Quick Links & Direct Downloads" start delay={200} />
          </Heading>
          <Text className={styles.sectionSubtitle} as="p">
            Instantly download the latest APK releases or launch live production platforms.
          </Text>
        </div>

        <div className={styles.quickGrid}>
          {quickDownloads.map(item => (
            <article key={item.id} className={styles.quickCard}>
              <div className={styles.quickCardTop}>
                <span className={styles.quickBadge} style={{ borderColor: item.accent }}>
                  {item.version}
                </span>
                <span className={styles.quickPlatform}>{item.platform}</span>
              </div>
              <h3 className={styles.quickTitle}>{item.title}</h3>
              <p className={styles.quickDesc}>{item.description}</p>
              <div className={styles.quickActions}>
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
      </Section>

      {/* FILTER TABS */}
      <Section className={styles.catalogSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.tagWrapper}>
            <Divider notchWidth="48px" notchHeight="6px" />
            <span className={styles.tag}>In-Depth Directory</span>
          </div>
          <Heading level={2} as="h2" className={styles.sectionTitle}>
            <DecoderText text="All Projects & Architectures" start delay={200} />
          </Heading>
          <Text className={styles.sectionSubtitle} as="p">
            Detailed breakdown of system architecture, feature sets, screenshots, and source code.
          </Text>

          <div className={styles.filterBar}>
            <button
              className={styles.filterBtn}
              data-active={filter === 'all'}
              onClick={() => setFilter('all')}
            >
              All Projects ({detailedProjects.length})
            </button>
            <button
              className={styles.filterBtn}
              data-active={filter === 'mobile'}
              onClick={() => setFilter('mobile')}
            >
              Mobile Apps
            </button>
            <button
              className={styles.filterBtn}
              data-active={filter === 'web'}
              onClick={() => setFilter('web')}
            >
              Web & SaaS
            </button>
            <button
              className={styles.filterBtn}
              data-active={filter === 'ai'}
              onClick={() => setFilter('ai')}
            >
              AI & Systems
            </button>
          </div>
        </div>

        {/* DETAILED PROJECT CARDS WITH REAL PHOTOS */}
        <div className={styles.projectsList}>
          {filteredProjects.map(project => (
            <article key={project.id} className={styles.projectDetailCard}>
              <div className={styles.projectHeaderRow}>
                <div className={styles.indexBadge}>{project.index}</div>
                <div className={styles.projectTitleGroup}>
                  <div className={styles.badgeRow}>
                    <span className={styles.categoryBadge}>{project.category}</span>
                    <span className={styles.statusBadge} style={{ borderColor: project.accent }}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className={styles.projectMainTitle}>{project.title}</h3>
                  <p className={styles.projectSubtitleText}>{project.subtitle}</p>
                </div>
              </div>

              {/* SCREENSHOTS / PHOTOS */}
              {project.images && project.images.length > 0 && (
                <div className={styles.mediaGallery}>
                  {project.images.map((img, i) => (
                    <figure key={i} className={styles.mediaItem}>
                      <div className={styles.imageFrame}>
                        <img
                          src={img.src}
                          alt={img.alt}
                          className={styles.projectScreenshot}
                          loading="lazy"
                        />
                      </div>
                      <figcaption className={styles.imageCaption}>{img.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              )}

              {/* DESCRIPTION & KEY FEATURES */}
              <div className={styles.projectBody}>
                <p className={styles.projectDescription}>{project.description}</p>

                {project.features && (
                  <div className={styles.featuresBlock}>
                    <h4 className={styles.featuresHeading}>Core Capabilities & Architecture:</h4>
                    <ul className={styles.featuresList}>
                      {project.features.map((feat, fIdx) => (
                        <li key={fIdx} className={styles.featureItem}>
                          <span className={styles.bullet}>▸</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* TECH STACK CHIPS */}
                <div className={styles.techStackRow}>
                  {project.tags.map(tag => (
                    <span key={tag} className={styles.techChip}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* ACTION BUTTONS */}
                <div className={styles.actionGroup}>
                  <Button
                    href={project.primaryAction.href}
                    iconHoverShift
                    iconEnd={project.primaryAction.icon}
                  >
                    {project.primaryAction.label}
                  </Button>
                  {project.secondaryAction && (
                    <Button
                      secondary
                      href={project.secondaryAction.href}
                      iconHoverShift
                      icon={project.secondaryAction.icon}
                    >
                      {project.secondaryAction.label}
                    </Button>
                  )}
                  {project.tertiaryAction && (
                    <Button
                      secondary
                      href={project.tertiaryAction.href}
                      iconHoverShift
                      icon={project.tertiaryAction.icon}
                    >
                      {project.tertiaryAction.label}
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
}
