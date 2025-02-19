import video from '@/assets/video.mp4';
import styled from 'styled-components';

const Video = styled.video`
  object-fit: cover;
  object-position: center;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  max-width: 80vw;
  margin: 0 auto;
  border-radius: 100%;
`;

export default function ConnectedView() {
  return <Video src={video} autoPlay controls={false} loop muted playsInline />;
}
