public class getbit{
    public static void bit(int n,int i){
        if ((n & (1<<i))==0) {
            System.out.println("the i th bit is 0");
        }else{
            System.out.println("it is 1");
        }
    }
    public static void main(String[] args) {
        int n=3;
        int i=3;
        bit(n,i);
    }
}