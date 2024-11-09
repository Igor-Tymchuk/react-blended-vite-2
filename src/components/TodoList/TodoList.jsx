import { Grid, GridItem, TodoListItem } from 'components';

export const TodoList = ({ todos, onDelete, handleEditTodo }) => {
  return (
    <Grid>
      {todos.map(({ text, id }, idx) => (
        <GridItem key={id}>
          <TodoListItem
            onDelete={onDelete}
            text={text}
            count={idx + 1}
            id={id}
            handleEditTodo={handleEditTodo}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
