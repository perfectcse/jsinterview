# DAY-2 INTERVIEW CONTROL — REVISION NOTES

## MAIN GOAL

Train interview control, not memorization.

Core structure:

Understand → Pause → Direct Answer → Short Explanation → Example if needed → STOP

What to control:

Calmness

Answer length

Understanding exactly what was asked

Thinking before answering

Follow-up questions

Pressure

Questions I don't know

Unnecessary explanations

Confidence without overconfidence

Technical reasoning instead of memorized answers

JAVASCRIPT FUNDAMENTALS

Q1. What is the difference between let, const, and var?

Answer:

var is the older way and is function-scoped. let and const are block-scoped. let can be reassigned, while const cannot be reassigned. In modern JavaScript, we mainly use let and const.

Lesson:

Be concise. Do not explain hoisting or every edge case unless asked.

Q2. Can you modify an object declared with const? Why?

Answer:

Yes. const prevents reassignment of the variable, but it doesn't prevent modification of a mutable object's properties.

Example:

const user = { name: "Vishal" };

user.name = "Rahul"; // allowed

user = {};           // not allowed

Lesson:

const protects the binding, not necessarily the contents of a mutable object.

EQUALITY

Q3. What is the difference between == and ===?

Answer:

== compares with type coercion, while === compares both value and type without type coercion. === is called strict equality.

Q4. What is the output?

console.log(5 == "5");

console.log(5 === "5");

Answer:

true

false

Reason:

== performs type coercion. === checks value and type.

Q5. If === is safer, why would we ever use ==?

Lesson:

Do not repeat the definition. Answer the WHY.

== can be intentionally useful when JavaScript's coercion behavior is desired, although many teams prefer === for predictability.

Interview-control lesson:

Answer the exact question, not the topic you remember.

EVENT LOOP

Q6. What is the JavaScript event loop? How do microtasks differ from macrotasks?

Answer:

The event loop allows JavaScript to handle asynchronous operations without blocking the main execution thread. After synchronous code finishes, microtasks such as Promise callbacks are processed before tasks such as setTimeout callbacks.

Q7. Output?

console.log("A");

setTimeout(() => {

  console.log("B");

}, 0);

Promise.resolve().then(() => {

  console.log("C");

});

console.log("D");

Answer:

A

D

C

B

Reason:

A and D are synchronous. C is a microtask. B is a timer task.

Q8. If Promise is replaced with queueMicrotask(), does the order change?

Answer:

No. queueMicrotask() also schedules a microtask, so the order does not change.

Q9. Output?

console.log("A");

setTimeout(() => console.log("B"), 0);

queueMicrotask(() => console.log("C"));

Promise.resolve().then(() => console.log("D"));

console.log("E");

Answer:

A

E

C

D

B

Reason:

Synchronous code runs first, then microtasks in registration order, then the timer task.

Q10. Is JavaScript single-threaded or multithreaded?

Answer:

JavaScript is single-threaded in the sense that its main execution thread runs one piece of JavaScript at a time. Asynchronous work is handled by the runtime environment, allowing JavaScript to continue without blocking.

Q11. If JavaScript is single-threaded, how can setTimeout run without blocking?

Answer:

setTimeout registers a timer with the runtime. Once the timer is ready, its callback is placed in the task queue and can execute when the call stack is empty and the event loop allows it to run.

Q12. Does setTimeout(callback, 0) mean the callback runs immediately?

Answer:

No. It means the callback can run as soon as possible after the current synchronous work finishes and the event loop gets a chance to execute it.

Key point:

0 milliseconds does NOT mean immediately.

CLOSURES

Q13. What is a closure?

Answer:

A closure is created when a function remembers and accesses variables from its outer scope, even after the outer function has finished executing.

Q14. Give a simple closure example.

Answer:

function counter() {

  let count = 0;

  return function () {

    count++;

    return count;

  };

}

const increment = counter();

console.log(increment()); // 1

console.log(increment()); // 2

Explanation:

The inner function remembers and accesses count from the outer function, even after counter() has finished.

Q15. What happens to count after counter() finishes? Shouldn't it be destroyed?

Key reasoning:

The inner function still references count, so count remains reachable through the closure. It can be reclaimed when it is no longer reachable.

Q16. Why does increment() still have access to count?

Answer:

The inner function forms a closure over count, so count remains reachable as long as that function is reachable.

Q17. Where would you use a closure in a real application?

Answer:

Closures are useful when we want to preserve private state between function calls. For example, a counter can keep its current value private while exposing a function to update it.

Q18. Why use a closure for private data instead of a normal variable?

Answer:

A closure can encapsulate state so that outside code cannot directly access the variable, while specific functions can still read or modify it.

Q19. Can I access a closure's private variable directly from outside?

Answer:

Not directly. The variable remains inside the closure's scope, so outside code can only interact with it through functions that have access to it.

Q20. Does that mean closure data is completely secure?

Answer:

No. The data isn't directly accessible, but it can still be changed through functions that have access to it.

Key distinction:

Privacy / encapsulation ≠ complete security.

REAL PROJECT / API QUESTIONS

Q21. Tell me about a difficult JavaScript problem you faced and how you solved it.

Good structure:

Problem → What I did → Result

Example:

One challenge I faced was handling multiple API calls in JavaScript. Sometimes the responses came at different times, which caused inconsistent data. I solved it using async/await with proper error handling, so the API calls were handled in a predictable way.

Lesson:

Be ready to explain WHY the chosen solution solved the problem.

Q22. Why did async/await make the API calls predictable? Were they sequential or parallel?

Important:

This is a TWO-PART question.

Answer Part 1 → Part 2 → Stop.

Do not answer only the first part.

Q23. If API calls are independent, would you await them one after another or use Promise.all()? Why?

Answer:

I would use Promise.all() because the API calls are independent, so they can run concurrently instead of waiting for each one sequentially. This can make the overall operation faster.

Lesson:

If asked “A or B? Why?”, explicitly choose A or B.

PROMISE.ALL()

Q24. If one promise passed to Promise.all() rejects, do the other promises stop executing?

Answer:

No. Promise.all() rejects when it observes a rejection, but it does not automatically cancel the other promises. They may continue executing.

Key point:

Promise rejection ≠ automatic cancellation.

Q25. If one promise rejects, what happens to the value returned by Promise.all()? How do you handle it?

Answer:

Promise.all() rejects with the error from the rejected promise, so it doesn't return the successful results array. When using await, I can handle that rejection with try/catch.

Q26. If fetchProducts() rejects, will fetchUsers() and fetchOrders() be cancelled?

Answer:

No. Promise.all() doesn't automatically cancel the other promises. They may continue executing even though Promise.all() has already rejected.

Important:

Do not answer with only “try/catch” if the question asks about cancellation.

PROMISE.ALLSETTLED()

Q27. Difference between Promise.all() and Promise.allSettled()?

Answer:

Promise.all() rejects when any promise rejects, while Promise.allSettled() waits for all promises to finish and gives the result of each, whether fulfilled or rejected.

Q28. Three independent APIs. Display whatever data is available even if one fails. Which would you use?

Answer:

I would use Promise.allSettled() because the APIs are independent. It waits for all calls to finish and lets me handle the successful results even if one API fails.

Decision structure:

Requirement → Decision → Reason → Stop.

Q29. Why not use Promise.all() with try/catch and ignore the failed API?

Answer:

With Promise.all(), one rejection causes the combined promise to reject, so it isn't ideal when I need the outcome of every API call. Promise.allSettled() gives me the status and result of each call, which better fits the requirement of displaying whatever data is available.

BIGGEST INTERVIEW-CONTROL LESSONS

ANSWER THE EXACT QUESTION

Do not answer a related question just because you know it.

Before speaking, silently ask:

“What exactly did the interviewer ask me?”

HANDLE MULTI-PART QUESTIONS

If the interviewer asks:

“Why did you use it, and was it sequential or parallel?”

Count the parts.

Answer:

Part 1 → Part 2 → Stop.

DO NOT FALL BACK TO MEMORIZED DEFINITIONS

Same topic does not mean same question.

For example:

“What is a closure?”

“Why use a closure?”

“What happens to its variables?”

“Is closure data secure?”

These require different answers.

PAUSE INSTEAD OF FILLING SILENCE

If unsure, take 2–3 seconds.

Do not use:

“Umm… basically… actually…”

A short pause sounds more confident.

DO NOT BLUFF

If you don't know:

“I’m not completely sure about that, so I don’t want to guess.”

or:

“I know the basic idea, but I’m not confident enough to explain the details accurately.”

AVOID ABSOLUTE WORDS

Be careful with:

always, never, any, completely, guaranteed, impossible.

KNOWING MORE DOES NOT MEAN SAYING MORE

Only give additional details when asked or when they are necessary.

CONFIDENCE WITHOUT OVERCONFIDENCE

Be clear and confident about what you understand.

Be honest about what you don't know.

IDEAL INTERVIEW ANSWER FORMULA

Understand

↓

Pause

↓

Direct Answer

↓

Short Explanation

↓

Example if needed

↓

STOP

The goal is NOT to sound like someone who memorized interview answers.

The goal is to sound like a developer who:

understands the problem

thinks clearly

communicates precisely

stays calm

handles follow-ups

knows when to stop

DAY-2 FINAL ASSESSMENT

Technical Knowledge: 8.5/10

Answer Length: 9/10

Confidence: 8.5/10

Calmness: 8/10

Follow-up Handling: 7.5/10

Question Understanding: 7/10

Pressure Handling: 7/10

Interview Control: 8/10

Overall: 8.2/10

Main weakness to continue training:

ANSWER THE EXACT QUESTION UNDER PRESSURE.

Main strength:

When you understand exactly what is being asked, you can give concise, technically strong answers.

DAY-2 STATUS:

29 questions/follow-ups completed.

Focus next:

The main difference is:
var can be redeclared and reassigned.
let can be reassigned but cannot be redeclared in the same scope.
const cannot be reassigned or redeclared.
For example:
var a = 10; var a = 20; → allowed
let b = 10; b = 20; → allowed, but let b = 20; again → not allowed
const c = 10; c = 20; → not allowed.
So, in modern JavaScript, I generally prefer let and const over var.

Synchronous
[1, 2, 3].forEach((num) => console.log(num));
 The callback runs immediately during forEach.

 Asynchronous
 setTimeout(() => console.log("Hello"), 1000);
 The callback runs later after the timer completes.

 A callback can be either synchronous or asynchronous depending on how the function invokes it
