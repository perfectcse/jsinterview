# React Learning Progress 🚀

This project is part of my learning journey from **Vanilla JavaScript → React Development**.

Currently this project demonstrates:
- React components
- Props
- useState Hook
- Event handling
- Component splitting
- External CSS styling

---

# 📁 Project Structure

---

# ⚛️ Concepts Covered

### 1. React Components
Components are reusable UI blocks.

Example:
```jsx
function Counter() {
  return <h1>Hello React</h1>;
}

2. JSX
JSX allows writing HTML inside JavaScript.

<h1>Hello Vishal</h1>

3. useState Hook
The useState hook allows functional components to manage state.

const [count, setCount] = useState(0);

4. Props
Props are used to pass data from parent component to child component.

5. Event Handling
React handles events using camelCase syntax.

...........................................................
🧠 Interview Questions & Answers
What is React?
React is a JavaScript library used to build user interfaces, especially single-page applications.

What is useState?
useState is a React Hook that allows functional components to manage state.

What is a Hook?
A Hook is a special function that allows React functional components to use state and lifecycle features.

What are Props?
Props are read-only inputs passed from parent components to child components.

Why does React re-render?
React re-renders when:
State changes
Props change
Parent component re-renders

...............................................
🚀 What You Learned in React Level-2 (Today)
⚛️ 1️⃣ useEffect Hook (Most Important)

✅ What you learned:

.Handles side effects
.Runs after render
.Controlled by dependency array

🎯 Interview Line:
useEffect is used to handle side effects like API calls, timers, and subscriptions

🧠 2️⃣ Dependency Array Concept
This is VERY important.
You learned:
[] → runs once
[count] → runs when count changes
no array → runs always
👉 This controls React behavior.

🔁 3️⃣ React Re-render Understanding
You now understand:
React re-renders when:
State changes
Props change

📊 Your Current React Level
After today:
You now know:
✔ JSX
✔ Components
✔ Props
✔ useState
✔ Event handling
✔ External CSS
✔ useEffect
✔ Re-render behavior
............