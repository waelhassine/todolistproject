import React from 'react'
import { useMutation, gql } from "@apollo/client";

const ADD_TODO = gql`
  mutation createTodo($title: String!) {
    createTodo(title: $title) {
      id
      title
    }
  }
`;
const FormAdd = () => {
    let input;
  const [createTodo] = useMutation(ADD_TODO, {
    update(
      cache,
      {
        data: { createTodo }
      }
    ) {
      cache.modify({
        fields: {
          todos(existingTodos = []) {
            const newTodoRef = cache.writeFragment({
              data: createTodo,
              fragment: gql`
                fragment NewTodo on Todo {
                  id
                  title
                }
              `
            });
            return existingTodos.concat(newTodoRef);
          }
        }
      });
    }
  });

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          createTodo({
            variables: { title: input.value },

            // Optimistically add the Todo to the locally cached
            // list before the server responds
            optimisticResponse: {
              createTodo: {
                id: 'temp-id',
                __typename: "Todo",
                title: input.value
              }
            }
          });
          input.value = "";
        }}
      >
        <input
        id="input1"
        size="20" placeholder="Input1"
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Create item</button>
      </form>
    </div>
  );
}
export default FormAdd;
