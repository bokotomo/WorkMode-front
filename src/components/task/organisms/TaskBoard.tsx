import React from 'react';
import { useDispatch } from 'react-redux';
import { ActionModal } from '@/redux/action/modal';
import { style, color, hover } from '@/css/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TaskCard } from '@/types/taskBoard';
import { TaskArea } from '@/components/task/molecules/taskArea';
import { IconCafe } from '@/components/svg/IconCafe';

interface Props {
  readonly handleOnSetSelectedTask: Function;
  readonly handleOnSetTaskTodo: Function;
  readonly handleOnSetTaskInProgresses: Function;
  readonly handleOnSetTaskDone: Function;
  readonly updateTaskStatus: Function;
  readonly todos: TaskCard[];
  readonly inProgresses: TaskCard[];
  readonly dones: TaskCard[];
}
export const TaskBoard: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
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

  const onOpenModal = () => dispatch(ActionModal.updateModalOpened('add'));

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
                width: 500,
                fontSize: 20,
                fontWeight: 800,
                margin: 'auto',
                marginTop: 200,
                opacity: 0.95,
                padding: '30px 0',
                background: 'linear-gradient(90deg, #BFC2FF, #23ACFF)',
                borderRadius: '150px',
                border: '2px solid white',
                textAlign: 'center',
              }}
            >
              <div style={{ marginBottom: 10 }}>
                <IconCafe width={50} height={50} />
              </div>
              下のボタンから、
              <br />
              タスクを追加してみましょう！
            </div>
          )}
          {!taskNotExist() && (
            <TaskArea
              handleOnSetTaskTodo={props.handleOnSetTaskTodo}
              handleOnSetTaskInProgresses={props.handleOnSetTaskInProgresses}
              handleOnSetTaskDone={props.handleOnSetTaskDone}
              handleOnSetSelectedTask={props.handleOnSetSelectedTask}
              updateTaskStatus={props.updateTaskStatus}
              todos={props.todos}
              inProgresses={props.inProgresses}
              dones={props.dones}
            />
          )}
        </div>
        <div className={css.buttonTaskAdd}>
          <button
            type="button"
            onClick={onOpenModal}
            className={css.buttonTaskAddPlus}
          >
            <FontAwesomeIcon icon="plus" />
          </button>
        </div>
      </div>
    </div>
  );
};
