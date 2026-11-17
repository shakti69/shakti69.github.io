import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import strikzPhoneTexture from '~/assets/strikz-phone.png';
import darkmusicTexture1 from '~/assets/darkmusic-mobile-1.webp';
import darkmusicTexture2 from '~/assets/darkmusic-mobile-2.webp';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoder wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Developer',
    description: `Portfolio of ${config.name} — Computer Science student, Developer & eSportsCaster.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      if (section.current) {
        sectionObserver.observe(section.current);
      }
    });

    if (intro.current) {
      indicatorObserver.observe(intro.current);
    }

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="DarkEdge AI"
        description="An offline, privacy-focused AI assistant designed to run AI models locally for document processing, writing, coding assistance, and OCR."
        buttonText="View GitHub"
        buttonLink="https://github.com/shakti69/DarkEdgeAi"
        secondaryButtonText="Download APK"
        secondaryButtonLink="https://github.com/shakti69/DarkEdgeAi/releases/download/v1.20.9/DarkEdge.AI.v1.20.9.apk"
        model={{
          type: 'phone',
          alt: 'DarkEdge AI app interface',
          textures: [
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="DarkMusic"
        description="Audiophile-grade offline & cloud music player engineered with Jetpack Compose 120 FPS UI, synchronized lyrics, gapless audio, and lossless playback."
        buttonText="Download APK"
        buttonLink="https://github.com/shakti69/DarkMusic/raw/main/DarkMusic.apk"
        secondaryButtonText="View GitHub"
        secondaryButtonLink="https://github.com/shakti69/DarkMusic"
        model={{
          type: 'phone',
          alt: 'DarkMusic mobile player and home interface',
          textures: [
            {
              srcSet: `${darkmusicTexture1} 375w, ${darkmusicTexture1} 750w`,
              placeholder: darkmusicTexture1,
            },
            {
              srcSet: `${darkmusicTexture2} 375w, ${darkmusicTexture2} 750w`,
              placeholder: darkmusicTexture2,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Strikz Esports"
        description="A modern esports platform designed for competitive gaming, featuring tournament management, player statistics, and match tracking."
        buttonText="Visit Website"
        buttonLink="https://strikzesports.in"
        model={{
          type: 'combo',
          alt: 'Strikz Esports platform on laptop and mobile',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
            {
              srcSet: `${strikzPhoneTexture} 375w, ${strikzPhoneTexture} 750w`,
              placeholder: strikzPhoneTexture,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
