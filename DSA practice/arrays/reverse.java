public class reverse{
    public static int search(int arr[]){
        int first=0;
        int last=arr.length-1;
        while(first<last){
            int temp=arr[last];
            arr[last]=arr[first];
            arr[first]=temp;
            first++;
            last--;
        }

return -1;
      }  
    public static void main(String[] args) {
        int arr[]={2,1,33,4,5,6,10,34};
        search(arr);
        for (int i = 0; i < arr.length; i++) {
         System.out.println(arr[i]+ " ");   
        }

   System.out.println();
    }}
       

