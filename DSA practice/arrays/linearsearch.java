public class linearsearch{
    public static int search(int arr[],int key){
      for (int i = 0; i < arr.length; i++) {
      if (arr[i]==key) {
        return i;
      }
      } 
        return -1;
      }  
    public static void main(String[] args) {
        int arr[]={2,1,33,4,5,6,10,34};
        int key=10;
        int index=search(arr,key);
        if(index==-1){
            System.out.println("not found");
        }else{
            System.out.println("yes "+index);
        
    }      

   
    }
       
}
