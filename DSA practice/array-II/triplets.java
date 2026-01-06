public class triplets{
    public static boolean nums(int arr[]){
        for (int i = 0; i < arr.length; i++) {
         int curr=arr[i];
         for (int j = i+1; j < arr.length; j++) {
            for (int k =i+ 2; k < arr.length; k++) {
                   
            
            if (arr[i]!=arr[j] && arr[i] !=arr[k] && arr[j]!=arr[k] && arr[i]+arr[j]+arr[k]==0) {
                System.out.println("("+curr+","+arr[j]+","+arr[k]+")");
            }
            
            }
             
         }   
        }
        return false;
    }
    public static void main(String[] args) {
        int arr[]={-1,0,1,2,-1,-4};
        System.out.println(nums(arr));
    }
}