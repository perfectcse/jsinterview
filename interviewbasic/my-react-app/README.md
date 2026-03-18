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
...........

⚛️ REACT CORE (Interview Answers)

1️⃣ What is JSX?
JSX is a syntax extension in React that allows us to write HTML-like code inside JavaScript. It is used to describe the UI structure and gets converted into JavaScript using React.createElement().

2️⃣ What are Components?
Components are reusable and independent pieces of UI in React. They help in breaking the UI into smaller parts, making the code more maintainable and scalable.

3️⃣ What are Props?
Props are read-only inputs passed from a parent component to a child component to share data. Props are immutable and cannot be modified by the child.

5️⃣ What is useState?

useState is a React Hook that allows functional components to manage and update state. When the state changes, React re-renders the component.

6️⃣ What is a Controlled Component?

A controlled component is a form element whose value is controlled by React state using useState and updated through onChange events.

7️⃣ What is Event Handling in React?

Event handling in React is the process of responding to user actions like clicks or input changes using event handlers such as onClick and onChange.

8️⃣ What is Dynamic UI Update?
Dynamic UI update means React automatically updates the UI whenever the state or props change, without manually manipulating the DOM.

...........................................
🧠 BONUS (VERY IMPORTANT FOR INTERVIEW)
9️⃣ Why does React re-render?
React re-renders a component when its state or props change. It updates the Virtual DOM and efficiently reflects changes in the real DOM.

🔟 Why not modify state directly?
We should not modify state directly because React relies on state changes to detect updates. Direct mutation may not trigger re-rendering.

1️⃣1️⃣ What is key in list?
Answer:
The key prop helps React identify which elements have changed, been added, or removed, improving rendering performance.

1️⃣2️⃣ What is map() in React?
Answer:
map() is used to iterate over arrays and render elements dynamically in React.

