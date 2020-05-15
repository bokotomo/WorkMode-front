import { Dispatch } from 'redux';
import { setWebsocket } from '@/redux/service/socket';

export default {
  setWebsocket: (dispatch: Dispatch) => setWebsocket(dispatch),
};
