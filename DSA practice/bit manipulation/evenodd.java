public class evenodd{
   public static void bit(int n){
    if ((n & 1) == 1) {
       System.out.println("num is odd"); 
    } else {
        System.out.println("number is even");
    }
   }
   public static void main(String[] args) {
       int n=4;
    bit(n);
   }
}