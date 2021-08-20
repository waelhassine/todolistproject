import React from "react";
import { useMutation, gql } from "@apollo/client";

const REMOVE_TODO = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id) 
  }
`;

const GET_TODOS = gql`
{
  todos {
    id
    title
  }
}
`;


const Todo =(props) => {
  const { id, title } = props;
  const updateCache = (client) => {
    const data = client.readQuery({
      query: GET_TODOS,
      variables: {
        id,
      }
    });
    const newData = {
      todos: data.todos.filter((t) => t.id !== id)
    }
    client.writeQuery({
      query: GET_TODOS,
      variables: {
        id,
        title
      },
      data: newData
    });
  }
  

  const [removeTodo] = useMutation(REMOVE_TODO, {
    variables: { id: id },
    update: updateCache
  });
  return (
    <tr key={id}>
      <td
       
      >
        {id}
      </td>
      <td>{title}</td>
      <td>
        
        <button  onClick={() => removeTodo()}>
          Delete
        </button>
      </td>
    </tr>
  );
}
export default Todo;


