import java.util.Arrays;
public class inbuiltsort{
    public static void printarr(int arr[]){
for (int j = 0; j < arr.length; j++) {
 System.out.print (arr[j]+" ");   
    
}}
    public static void main(String[] args) {
        int arr[]={2,1,4,3};
        Arrays.sort(arr,0,2);
        printarr(arr);
    }
}