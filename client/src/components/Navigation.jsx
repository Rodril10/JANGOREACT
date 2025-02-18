import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <div className='felx justify-between py-3'>
      <Link to="/Task">
        <h1 className='font-bold text-3xl mb-4'>Task App</h1>
      </Link>

      <button className='bg-indigo-500 px-3 py-2 rounded-lg'>
        <Link to="/TaskForm">Create Task</Link>
      </button>
      
    </div>
  );
}


