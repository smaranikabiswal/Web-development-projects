public class poww{
    public static int calc(int x,int n){
        if (n==0) {
           return 1; 
        }
        int halfpowersq=calc(x,n/2)*calc(x,n/2);
        if(n%2 !=0){
            halfpowersq=x*halfpowersq;
        } 
        return halfpowersq;
    }
    public static void main(String[] args) {
    System.out.println(calc(2,10));
}
}