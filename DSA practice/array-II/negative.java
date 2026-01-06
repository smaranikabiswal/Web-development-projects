public class negative{
    public static void sub(int arr[]){
int cs=0;
int ms=Integer.MIN_VALUE;
for (int i = 0; i < arr.length; i++) {
    cs += arr[i];
    if (arr[i]<0) {
      cs=Math.min(cs,ms);  
    }}
    System.out.println("max sum is"+ms);

    }

}