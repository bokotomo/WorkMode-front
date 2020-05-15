import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const ActionController = {
  taskCreate: actionCreator<MessageEvent>('CONTROLLER_TASK_CREATE'),
  taskIndex: actionCreator<MessageEvent>('CONTROLLER_TASK_INDEX'),
  taskUpdateStatus: actionCreator<MessageEvent>(
    'CONTROLLER_TASK_UPDATE_STATUS'
  ),
  taskDelete: actionCreator<MessageEvent>('CONTROLLER_TASK_DELETE'),
  authentication: actionCreator<MessageEvent>('CONTROLLER_AUTHENTICATION'),
  messageIndex: actionCreator<MessageEvent>('CONTROLLER_MESSAGE_INDEX'),
  messageFind: actionCreator<MessageEvent>('CONTROLLER_MESSAGE_FIND'),
  messageDelete: actionCreator<MessageEvent>('CONTROLLER_MESSAGE_DELETE'),
  activeUserSearch: actionCreator<MessageEvent>('CONTROLLER_USER_SERCH'),
  userCreate: actionCreator<MessageEvent>('CONTROLLER_USER_CREATE'),
};
