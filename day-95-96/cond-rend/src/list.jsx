
export function ToDoList({ arr }) {
// data should come from props

    return(             //  use list-style-type that in jsx below like that
        <ul style = {{'listStyleType' : 'none'}}> 
            {
             arr.map( ({name, status, id }) => (
                <li key={id} > {status ? '@' : '*' } {name}</li>
                  )
             )
        }
        </ul>
    )
} 