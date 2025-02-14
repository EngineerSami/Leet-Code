    class MyCircularQueue:

        def __init__(self, k: int):
            self.k = k
            self.queue = [None] * k
            self.front = self.rear = -1

        def enQueue(self, value: int) -> bool:
            if ((self.rear + 1) % self.k == self.front):
                return False
            elif (self.front == -1):
                self.front = 0
                self.rear = 0
                self.queue[self.rear] = value
                return True
            else:
                self.rear = (self.rear + 1) % self.k
                self.queue[self.rear] = value
                return True


        def deQueue(self) -> bool:
            if self.front == -1:
                return False
            elif self.front == self.rear:
                self.front = -1
                self.rear = -1
                return True
            else:
                self.front = (self.front + 1) % self.k
                return True


        def Front(self) -> int:
            if self.front == -1:
                return -1
            else:
                return self.queue[self.front]

        def Rear(self) -> int:
            if self.rear == -1:
                return -1
            else:
                return self.queue[self.rear]

        def isEmpty(self) -> bool:
            return self.front == self.rear

        def isFull(self) -> bool:
            return ((self.rear + 1) % self.k == self.front)
# Time: O(1)
# Space: O(n)