public class selectionsort{
    public static void sorting(int arr[]){
        for (int i = 0; i < arr.length-1; i++) {
         int min=i;  
         for (int j = i+1; j < arr.length; j++) {
          if (arr[min]>arr[j]) {
           min=j;   
          }  
             
         }
         int temp=arr[min];
         arr[min]=arr[i];
         arr[i]= temp; 
        }
    }
    public static void printarr(int arr[]){
        for (int k = 0; k < arr.length; k++) {
           System.out.print(arr[k]+" ");
            
        }
    }
    public static void main(String[] args) {
        int arr[]={5,2,4,1,3};
        sorting(arr);
        printarr(arr);

    }
}