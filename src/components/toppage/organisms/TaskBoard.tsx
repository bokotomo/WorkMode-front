import React from 'react';
import { style, color, hover } from '@/css/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TaskCard } from '@/types/taskBoard';
import { TaskArea } from '@/components/toppage/molecules/taskArea';

interface Props {
  readonly handleOnModalOpend: Function;
  readonly handleOnSetSelectedTask: Function;
  readonly handleOnSetTaskTodo: Function;
  readonly handleOnSetTaskInProgresses: Function;
  readonly handleOnSetTaskDone: Function;
  readonly updateTaskStatus: Function;
  readonly todos: TaskCard[];
  readonly inProgresses: TaskCard[];
  readonly dones: TaskCard[];
  readonly socket: WebSocket;
}
export const TaskBoard: React.FC<Props> = (props) => {
  const css = {
    taskBoard: style({
      background: '#102133',
      flex: '0 1 55%',
      display: 'flex',
    }),
    left: style({
      display: 'flex',
      width: '100%',
      background: '#25313E',
      flexFlow: 'column',
      justifyContent: 'space-between',
    }),
    taskStatus: {
      area: style({
        display: 'flex',
        color: '#F0F6FC',
        textAlign: 'center',
        height: 80,
        fontSize: 20,
        fontWeight: 700,
      }),
      title: style({
        flex: '0 1 33.3%',
        background: '#1E2833',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }),
      titleCenter: style({
        flex: '0 1 33.4%',
        background: '#202C3B',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }),
    },
    buttonTaskAdd: style({
      ...hover.button,
      flex: '0 1 80px',
      background: 'linear-gradient(125deg, #66B7FF, #0052de)',
      fontSize: 30,
      fontWeight: 700,
      lineHeight: '80px',
      cursor: 'pointer',
      width: '100%',
    }),
    buttonTaskAddPlus: style({
      display: 'block',
      fontSize: 24,
      color: color.white,
      width: '100%',
      height: '100%',
      margin: 'auto',
      textAlign: 'center',
    }),
  };

  const taskNotExist = () => {
    return (
      props.todos.length === 0 &&
      props.inProgresses.length === 0 &&
      props.dones.length === 0
    );
  };

  function openModal() {
    props.handleOnModalOpend('add');
  }

  return (
    <div className={css.taskBoard}>
      {/* <img src='/images/taskImage.png' /> */}

      <div className={css.left}>
        <div className={css.taskStatus.area}>
          <div className={css.taskStatus.title}>やること</div>
          <div className={css.taskStatus.titleCenter}>実行中</div>
          <div className={css.taskStatus.title}>完了したこと</div>
        </div>
        <div style={{ flex: '0 1 100%' }}>
          {taskNotExist() && (
            <div
              style={{
                width: '100%',
                paddingTop: 100,
                textAlign: 'center',
              }}
            >
              下のボタンからタスクを追加しましょう。
            </div>
          )}
          {!taskNotExist() && (
            <TaskArea
              handleOnSetTaskTodo={props.handleOnSetTaskTodo}
              handleOnSetTaskInProgresses={props.handleOnSetTaskInProgresses}
              handleOnSetTaskDone={props.handleOnSetTaskDone}
              handleOnModalOpend={props.handleOnModalOpend}
              handleOnSetSelectedTask={props.handleOnSetSelectedTask}
              updateTaskStatus={props.updateTaskStatus}
              todos={props.todos}
              inProgresses={props.inProgresses}
              dones={props.dones}
              socket={props.socket}
            />
          )}
        </div>
        <div className={css.buttonTaskAdd}>
          <button
            type="button"
            onClick={openModal}
            className={css.buttonTaskAddPlus}
          >
            <FontAwesomeIcon icon="plus" />
          </button>
        </div>
      </div>
    </div>
  );
};
