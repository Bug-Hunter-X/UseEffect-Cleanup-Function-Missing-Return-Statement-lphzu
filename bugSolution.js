```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === ' ') {
        setCount(count + 1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Correct: Return a cleanup function
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```