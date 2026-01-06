public class maxsum{
    public static void subarrays(int arr[]){
        
        int maxsum=Integer.MIN_VALUE;
        for (int i = 0; i < arr.length; i++) {
           int start=i;
           for (int j = i; j < arr.length; j++) {
           int end=j;
         int  currsum=0;
           for (int k = start; k <=end; k++) {
               currsum += arr[k];
           }
           System.out.println(currsum);
if (maxsum<currsum) {
    maxsum=currsum;
    
  }  }}     
System.out.println("maximum sum is "+maxsum);
    }
    public static void main(String[] args) {
        int arr[]={12,4,3,-8,10};
        
        subarrays(arr);
    }
}