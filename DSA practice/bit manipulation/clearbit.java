public class clearbit{
    public static int clrbit(int n,int i){
        return n & ~(1<<i);
    }
    public static void main(String[] args) {
      System.out.println(clrbit(6,2));  

    }
}