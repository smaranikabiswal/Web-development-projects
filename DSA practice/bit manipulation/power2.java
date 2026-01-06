public class power2{
    public static boolean powe(int n){
        if ((n & (n-1))==0) {
            System.out.println("it is a power of 2");
        } else {
            System.out.println("it is not");
        }
        return true;
    }
    public static void main(String[] args) {
        System.out.println(powe(9));
    }
}