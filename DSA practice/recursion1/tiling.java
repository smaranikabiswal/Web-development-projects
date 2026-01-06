public class tiling{
    public static int ways(int n){
        if (n==0 || n==1) {
            return 1;
        }
        //vertical
        int wnm1= ways(n-1);
        //horizontal
        int wnm2=ways(n-2);
        int totalways=wnm1+wnm2;
        return totalways;
    }
    public static void main(String[] args) {
        System.out.println(ways(9));
    }
}