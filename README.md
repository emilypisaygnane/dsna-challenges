# Data Structures & Algorithms

### Day 2

## CH-01-Stack

Stacks are first-in, last-out data structures. Think of them like a stack of rocks, you can only add a rock on top, or take off the top rock. Optionally, you can also "peek" at what the top rock is.

Challenge
Implement Stack as an abstract data type (class that has an array property) that exposes:

push(item)
pop() returns item
peek() returns item
Think back to BigO for arrays when you decide where to put the items in the backing data store array.

## CH-02-Queue

Queues are first-in, first-out data structures. Think of them like a line of people waiting for the bank teller.

Each new person joins the end of the line, and the bank teller helps the first person in line. Optionally, you can also check "has next" to know if someone else is waiting in line.

Challenge
Implement Queue as an abstract data type (class that has an array property) that exposes:

enqueue() take an item
dequeue() return an item
hasNext() return true or false
What is the trade-off of this approach?

## CH-03-Check-Syntax

Challenge
Write a function that takes a string of code and uses a Stack for determining if parenthesis and curly braces are properly matched. Return true if correctly formatted, otherwise false.

## CH-04-Reverse-Array-With-Stack

Challenge
Write a function that reverses an array using a Stack class

## CH-05-O-1-Dequeue

Queues are first-in, first-out data structures. Think of them like a line of people waiting for the bank teller.

Each new person joins the end of the line, and the bank teller helps the first person in line. Optionally, you can also check "has next" to know if someone else is waiting in line.

Challenge
Most likely, the time complexity of your enqueue is O(1) but dequeue is O(n). Can you make it so both operations are O(1)? Hint: the people in line can't shift (take a step forward), can you move the front of the line?

What is the trade-off of this approach?
