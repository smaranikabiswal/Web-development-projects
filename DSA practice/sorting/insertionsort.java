


public class insertionsort{
    public static void sorting(int arr[]){
        for (int i = 0; i < arr.length; i++) {
          int curr=arr[i];
          int prev=i-1;
          while (prev>=0 && arr[prev]>curr) { 
              arr[prev+1]=arr[prev];
              prev--;
          }  
          arr[prev+1]=curr;
        }
    }
public static void printarr(int arr[]){
for (int j = 0; j < arr.length; j++) {
 System.out.print (arr[j]+" ");   
    
}
}
 public static void main(String[] args) {
    int arr[]={4,5,2,3,1};
    sorting(arr);
    printarr(arr); 
 }   
}