Time complexity : O(NLOGK)
Space complexity : O(K)
Switched to java language as priorityQ functionality unvaialble in javascript.
class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> pq = new PriorityQueue<Integer>();
        
        for(int i =0;i<nums.length;i++){
            if(pq.size()<k){
                pq.add(nums[i]);
            }
            else{
                if(pq.peek()<nums[i]){
                    pq.remove();
                    pq.add(nums[i]);
                }
            }
        }
        return pq.peek();
    
    }
}