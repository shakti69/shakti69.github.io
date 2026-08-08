import { Link } from '~/components/link';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://strikzesports.in">Primary link</Link>
    <Link secondary href="https://strikzesports.in">
      Secondary link
    </Link>
  </StoryContainer>
);
