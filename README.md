# React useEffect Cleanup Function Missing Return Statement

This example demonstrates a common error in React's `useEffect` hook: forgetting to include a return statement for the cleanup function.  This can lead to memory leaks if the component unmounts before the cleanup function has a chance to execute.

The `bug.js` file contains the erroneous code. The `bugSolution.js` file provides the corrected version.

## Problem:

The `useEffect` hook in `bug.js` adds an event listener.  However, it lacks a return statement to remove the event listener when the component unmounts. This means that the event listener will continue to exist in memory, even after the component is no longer needed. This is particularly important when dealing with memory-intensive tasks, potentially leading to performance issues and memory leaks in production.

## Solution:

The `bugSolution.js` file shows the correct usage of `useEffect`. The return statement provides a cleanup function that removes the event listener, preventing memory leaks and ensuring that component unmounts cleanly.