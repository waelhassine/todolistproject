import React  from 'react';
import Todo from "./Todo";
import {
    useQuery,
    gql
  } from "@apollo/client";
  
const GET_TODOS = gql`
{
  todos {
    id
    title
  }
}
`;


const Todos = () => {
    
   const { data, error, loading } = useQuery(GET_TODOS);

    if (error) return <h1>Error...</h1>;
    if (loading) return <h1>loading...</h1>;
  
    const { todos } = data;
    return ( 
        <table>
 {loading ? (<p>Loading...</p>):(
        <div>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
            {data.todos.length > 0 ? (
                <div>
                      {todos.map(todo => {
                          const { id } = todo;
                          return <Todo key={id} {...todo} />;
                      })}
                </div>
            ):null}
            
        </div>
        
        )
    }
        </table>

       
        
        
      
    );
    

}
export default Todos;
