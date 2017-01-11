import { connectWithId } from '../../../util/index';
import PlaybackRateBarValue from '../../../components/controls/playbackRateBar';

const mapStateToProps = ({ jPlayers }, { id, ...attributes }) => ({
  verticalPlaybackRate: jPlayers[id].verticalPlaybackRate,
  minPlaybackRate: jPlayers[id].minPlaybackRate,
  maxPlaybackRate: jPlayers[id].maxPlaybackRate,
  playbackRate: jPlayers[id].playbackRate,
  attributes,
});

export default connectWithId(mapStateToProps)(PlaybackRateBarValue);
