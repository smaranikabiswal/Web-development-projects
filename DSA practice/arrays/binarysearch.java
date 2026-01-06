public class binarysearch{
    public static int binarysearch(int arr[],int key){
     int start=0,end=arr.length-1;
     while (start<=end) { 
         int mid=(start+end)/2;
         if (mid==key) {
           return mid;  
         }
         if (mid<key) {
           start=mid+1;  
         }else{
        end=mid-1;    
         }
     }
      
        return -1;
      }  
    public static void main(String[] args) {
        int arr[]={2,1,33,4,5,6,10,34};
        int key=10;
        
      System.out.println("index is "+binarysearch(arr,key));
          

   
    }
       
}
