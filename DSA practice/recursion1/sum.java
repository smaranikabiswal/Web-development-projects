public class sum{
    public static int add(int n){
        if (n==1) {
           return 1; 
        }
        int anm1=add(n-1);
        int an=n+add(n-1);
        return an;
    }
    public static void main(String[] args) {
        System.out.println(add(10));
    }
}