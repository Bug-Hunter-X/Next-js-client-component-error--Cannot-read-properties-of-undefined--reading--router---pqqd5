```javascript
// pages/aboutSolution.js
import { useRouter } from 'next/router';

function About() {
  const router = useRouter(); // this is now used inside a page component and works correctly

  //Example of correct usage of useRouter:
  const handleClick = () => {
    router.push('/');
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go back to home</button>
    </div>
  );
}
export default About;
```