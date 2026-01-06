import java.util.*;
public class lsearch{
    public static int search(int arr[],int key){
      for (int i = 0; i < arr.length; i++) {
      if (arr[i]==key) {
        return i;
      }
      } 
        return -1;
      }  
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int arr[]=new int[100];
 arr[0]=sc.nextInt();
 arr[1]=sc.nextInt();
 arr[2]=sc.nextInt();
 arr[3]=sc.nextInt();
 arr[4]=sc.nextInt();
 arr[5]=sc.nextInt();
 arr[6]=sc.nextInt();
        
        int key=10;
        int index=search(arr,key);
        if(index==-1){
            System.out.println("not found");
        }else{
            System.out.println("yes "+index);
        
    }      

   
    }
       
}
