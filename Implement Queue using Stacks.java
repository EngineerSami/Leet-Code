import java.util.Stack;

class MyQueue {
    Stack<Integer> stack1 = new Stack<>();
    Stack<Integer> stack2 = new Stack<>();
    int size=0;

    public void push(int x) {
        stack1.push(x); 
        size ++;
    }
    
    public int pop() {
        if (empty()) {
            return -1;
        }
        if (stack2.isEmpty()) {
            while (stack1.isEmpty()==false) {
                stack2.push(stack1.pop());
            }
        }
        size --; 
        return stack2.pop();
    }
    
    public int peek() {
        if (empty()) {
            return -1;
        }
        if (stack2.isEmpty()) {
            while (stack1.isEmpty()==false) {
                stack2.push(stack1.pop());
            }
        }
        return stack2.peek();
    }
    
    public boolean empty() {
        return stack1.isEmpty() && stack2.isEmpty();
    }
}
// Time: O(N)
// Space: O(N)