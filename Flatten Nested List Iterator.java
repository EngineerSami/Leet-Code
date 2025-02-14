import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class NestedIterator implements Iterator<Integer> {
    private Queue<Integer> queue;

    public NestedIterator(List<NestedInteger> nestedList) {
        queue = new LinkedList<>();
        flatten(nestedList);
    }

    private void flatten(List<NestedInteger> nestedList) {
        for (NestedInteger ni : nestedList) {
            if (ni.isInteger()) {
                queue.offer(ni.getInteger()); 
            } else {
                flatten(ni.getList());
            }
        }
    }

    @Override
    public Integer next() {
        return queue.poll(); 
    }

    @Override
    public boolean hasNext() {
        return !queue.isEmpty(); 
    }
}
// Time: O(N)
// Space: O(N)