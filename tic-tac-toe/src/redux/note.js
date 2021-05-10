// import { createStore } from 'Redux' 직접 만들어보기

const createStore = (reducer) => {
  let state;
  let listners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listners.forEach(listner => listner());
  }

  const subscribe = (listner) => {
    listners.push(listner);
    return () => {
      listners = listners.filter(l => l !== listner);
    }
  }
}

const countReducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state+1;
    case 'DECREMENT':
      return state-1;
    default:
      return state;
  }
}

// 리액트와 합쳐서 구현해보기
const Counter = ({
  value, 
  onIncrement, 
  onDecrement 
}) => {
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
}

const store = createStore(countReducer);

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState}
      onIncrement={() => {
        store.dispatch({
          type: 'INCREMENT'
        })
      }}
      onDecrement={() => {
        store.dispatch({
          type: 'DECREMENT'
        })
      }}
    />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();

// 리덕스 사용중 피해야할 함수들
// 1. array.push()
const addCounter = (list) => {
  list.push(0); // 기존 list를 건들이게되므로 X
  return list;

  // 대체 방법
  return [...list, 0];
}
// 2. array.splice()
const removeCounter = (list, index) => {
  list.splice(index, 1); // X
  return list

  // 대체 방법
  return [
    ...list.slice(0,index),
    ...list.slice(index+1),
  ];
}
// 3. 내부배열에 직접 접근
const incrementCounter = (list, index) => {
  list[index]++; // X
  return list;

  // 대체 방법
  return [
    ...list.slice(0,index),
    list[index]+1,
    ...list.slice(index+1)
  ]
}
// 4. 객체 내부 변경
const toggleTodo = (todo) => {
  todo.completed = !todo.completed; // X
  return todo;

  // 대체 방법 1
  return Object.assign({}, todo, {
    completed: !todo.completed
  })
  // 대체 방법 2
  return {
    ...todo,
    completed: !todo.completed
  }
}

// reducer 만들기 2 - reducer composition
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id:action.id,
        text: action.text,
        completed: false,
      };
    case 'TOGGLE_TODO':
      if(state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      }
    default: 
      return state;
  }
}

// reducer 만들기 1
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
}

const testTodo = () => {
  const stateBeforeAdd = [];
  const addAction = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  }
  todos(stateBeforeAdd, addAction);

  const stateBeforeToggle = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: true
    }
  ]
  const toggleAction = {
    type: 'TOGGLE_TODO',
    id: 1
  }
  todos(stateBeforeToggle, toggleAction);
}

// reducer 만들기 3.1 - 새로운 속성(프로퍼티) 추가하기
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default: 
      return state;
  }
}

// reducer 만들기 3.2 - reducer composition 패턴
// todos는 todos와 관련된 리듀서이고,
// visibilityFilter는 visibilityFilter와 관련된 리듀서이다
// 이는 팀원들과 작업할 때 내가 사용하는 리듀서만 가져와 쓸 수 있음을 의미한다
const todoApp = (state = {}, action) => {
  return {
    todos: todos(
      state.todos,
      action
    ),
    visibilityFilter: visibilityFilter(
      state.visibilityFilter,
      action
    )
  }
}

// combineReducers
const { combineReducers } = Redux; // import { combineReducers } from 'Redux';
const todoAppReducer = combineReducers({
  todos,
  visibilityFilter
});

// combineReducers 하드코딩
const todoAppReducer2 = (reducers) => {
  return (state = [], action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](
          state[key],
          action
        );
        return nextState;
      },
      {}
    );
  }
}

// Total Example
let nextTodoId = 0;
const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  };
};

const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};

const { Component} = React;
const { connect } = ReactRedux;


const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span>{children}</span>
  }
  return (
    <a href='/'
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
      >
      {children}
    </a>
  );
};

const mapStateToLinkProps = (state, ownProps) => {
  return {
    active:
      ownProps.filter ===
      state.visibilityFilter
  }
};
const mapDispatchToLinkProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(
        setVisibilityFilter(ownProps.filter)
      );
    }
  };
};

const FilterLink = connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(Link);

const connect = (mapStateToProps, mapDispatchToProps) => {
  const state = mapStateToProps();
  const dispatch = mapDispatchToProps();
  return (child) => {
    return child(state, dispatch);
  }
}

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter='SHOW_ALL'>
      ALL
    </FilterLink>
    {' '}
    <FilterLink filter='SHOW_ACTIVE'>
      Active
    </FilterLink>
    {' '}
    <FilterLink filter='SHOW_COMPLETED'>
      Completed
    </FilterLink>
  </p>
)

const Todo = ({
  onClick,
  completed,
  text
}) => (
  <li
    onClick={onClick}
    style={{textDecoration: completed ? 'line-through' : 'none'}}
  >
    {text}
  </li>
);

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => 
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)} 
      />
    )}
  </ul>
);

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => {input = node;}} />
      <button onClick={() => {
        dispatch(addTodo(input.value));
        this.input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  )
};
AddTodo = connect()(AddTodo);

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      return null;
  }
};

const mapStateToTodoListProps =  (state) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  }
}
const mapDispatchToTodoListProps = (dispatch) => {
  return {
    onTodoClick: (id) =>
      dispatch({
        type: 'TOGGLE_TODO',
        id
    })
  }
}
const VisibleTodoList = connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(TodoList);

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

class Provider extends Component {
  getChildContext() {
    return {
      store: this.props.store
    };
  }

  render() {
    return this.props.children;
  }
}

Provider.childContextTypes = {
  store: React.PropTypes.object
};

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
