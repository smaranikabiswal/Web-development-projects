public class maxsumIII{
    public static void subarray(int arr[]){
        int maxsum=Integer.MIN_VALUE;
        int currsum= 0;
        for (int i = 0; i < arr.length; i++) {
            currsum += arr[i];
            if (currsum<0) {
             currsum=0;   
            }
         maxsum=Math.max(currsum,maxsum);   
        }
        System.out.println("max sum is"+maxsum);
    }
    public static void main(String[] args) {
     int arr[]={-1,3,4,-6,2};
     subarray(arr);   
    }
}